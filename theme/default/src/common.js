import meta from 'meta';
import $ from 'jquery';
import _ from 'lodash';
import './common.less';
import hotKeywords from './hot-keywords';

const linksByKeyword = {};
const _keywords = [];
_.each(hotKeywords, keywords => {
    _.each(keywords, item => {
        linksByKeyword[item.keyword] = linksByKeyword[item.keyword] || [];
        linksByKeyword[item.keyword].push(item);
        _keywords.push(item.keyword);
    });
});

const $query = $('#query');

const duration = 800;
function animatingPlaceholder(text) {
    const length = text.length;
    const timeout = duration / length;
    for (let i = 0; i < length + 1; i += 1) {
        setTimeout(() => {
            $query.attr('placeholder', text.substring(0, i));
        }, i * timeout);
    }
}

let counter = 0;
function updatePlaceholder() {
    const index = counter % _keywords.length;
    const str = _keywords[index];
    $query.data('placeholder', str);
    // $.a
    animatingPlaceholder(str);
    // $query.attr('placeholder', str);
    counter += 1;
}
setInterval(updatePlaceholder, 4000);
updatePlaceholder();

$query.click(() => {
    if (!$query.val()) {
        $query.val($query.data('placeholder'));
        $query.autocomplete('onValueChange');
    }
});

// search
function buildFlattenIndices(docs, invertedList) {
    const indices = [];
    const uniqueIndices = [];
    const docById = {};

    // docs
    docs.forEach(doc => {
        docById[doc.id] = doc;
        doc.anchors.forEach(anchor => {
            indices.push({
                data: {
                    title: doc.anchors[0].title,
                },
                value: anchor.title,
                // level: anchor.level,
                id: doc.id,
                anchorId: anchor.id,
            });
        });
    });

    // inverted list
    _.forIn(invertedList, (referenceIds, word) => {
        referenceIds.forEach(ids => {
            if (_.isArray(ids)) {
                const [id, anchorId] = ids;
                indices.push({
                    data: {
                        title: docById[id].anchors[0].title,
                    },
                    value: word,
                    id,
                    anchorId,
                });
            }
        });
    });

    // filter duplicated indices
    const groups = _.groupBy(indices, row => `${row.id}-${row.anchorId}`);
    _.forIn(groups, rows => {
        const valuesToken = {};
        rows.forEach(row => {
            if (!valuesToken[row.value]) {
                uniqueIndices.push(row);
                valuesToken[row.value] = true;
            }
        });
    });
    return uniqueIndices;
}

// search
$.getJSON(`${meta.dist}/_indexing.${meta.locale}.json`, data => {
    const {
        docs,
        invertedList
    } = data;
    const autocompleteContainerWidth = window.innerWidth > 720 ? 720 : 'auto';
    const autocompleteContainerMaxHeight = 320;

    const docById = {};
    docs.forEach(doc => {
        docById[doc.id] = doc;
        doc.anchorById = {};
        doc.anchors.forEach(anchor => {
            doc.anchorById[anchor.id] = anchor;
        });
    });

    function onSelect(suggestion) {
        const doc = docById[suggestion.id];
        window.location = `${doc.href}${doc.anchorById[suggestion.anchorId].href}`;
    }

    function escapeRegExChars(value) {
        return value.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
    }

    function wrapResult(suggestion, formattedValue) {
        return `<div class="keyword">${formattedValue}</div><div class="doc-title">${suggestion.data.title}</div>`;
    }

    function formatResult(suggestion, currentValue) {
        // Do not replace anything if the current value is empty
        if (!currentValue) {
            return suggestion.value;
        }
        const pattern = '(' + escapeRegExChars(currentValue) + ')';
        const value = suggestion.value
            .replace(new RegExp(pattern, 'gi'), '<strong>$1</strong>')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/&lt;(\/?strong)&gt;/g, '<$1>');
        return wrapResult(suggestion, value);
    }
    function beforeRender(container) {
        const keyword = $query.val();
        if (linksByKeyword[keyword]) {
            container.html(`${linksByKeyword[keyword].map((link, index) => `<div class="autocomplete-suggestion" data-index="${index}"><div class="keyword"><strong>${link.keyword}</strong></div><div class="doc-title">${link.title}</div></div>`).join('')}
<hr>
<div class="container">
  <div class="row">
  ${_.map(hotKeywords, (keywords, product) =>`
      <div class="col-sm">
        <p class="keyword-title">${product} 热搜</p>
        <ul class="keyword-links">
        ${_.map(keywords, item => `
          <li><a href="${item.href}">${item.keyword}</a></li>
        `).join('')}
        </ul>
      </div>
  `).join('')}
  </div>
</div>
            `);
        }
    }

    const flattenIndices = buildFlattenIndices(docs, invertedList);
    $query.autocomplete({
        lookupLimit: 20,
        // groupBy: 'title',
        width: autocompleteContainerWidth,
        maxHeight: autocompleteContainerMaxHeight,
        lookup: flattenIndices,
        triggerSelectOnValidInput: true,
        onSelect,
        formatResult,
        beforeRender,
    });

    // for doc filtering
    const $docFilteringQuery = $('#doc-filtering-query');
    const filteringCategories = [
        'api',
        'blog',
        'chart',
        'demo',
        'design',
        'resource',
        'tutorial',
    ];
    if ($docFilteringQuery.length) { // filtering feature enabled
        const pathParts = meta.href.split('/');
        while (pathParts.length && filteringCategories.indexOf(pathParts[pathParts.length - 1]) === -1) {
            pathParts.pop();
        }
        const matchedPath = pathParts.join('/');
        const matchedIds = [];
        _.forIn(docById, doc => {
            if (doc.href.indexOf(matchedPath) > -1) {
                matchedIds.push(doc.id);
            }
        });
        const docIndices = flattenIndices.filter(index => matchedIds.indexOf(index.id) > -1);
        $docFilteringQuery.autocomplete({
            lookupLimit: 20,
            // groupBy: 'title',
            width: autocompleteContainerWidth,
            maxHeight: autocompleteContainerMaxHeight,
            lookup: docIndices,
            triggerSelectOnValidInput: true,
            onSelect,
            formatResult,
            beforeRender,
        });
    }
});

// FIXME doc filtering is in ./common.js
// FIXME promote banner(AD)
// const localStorage = window.localStorage;
// const promoteStatusKey = 'hide-yuque-20180428';
// const promoteStatus = localStorage.getItem(promoteStatusKey);
// if (localStorage && (!promoteStatus || promoteStatus !== 'true')) {
//     $('.promote-banner a .cross').click(e => {
//         e.preventDefault();
//         e.stopPropagation();
//         const height = $('.promote-banner').height();
//         $('.promote-banner').animate({
//             height: 0,
//             top: -height
//         }, 1000);
//         $('.promote-banner').addClass('hiden');
//         localStorage.setItem(promoteStatusKey, 'true');
//     });
//     $('.promote-banner a').click(() => {
//         localStorage.setItem(promoteStatusKey, 'true');
//     });
//     const adBannerHeight = $('.promote-banner a img').height();
//     $('.promote-banner').css({
//         top: -adBannerHeight,
//         display: 'block'
//     });
//     setTimeout(() => {
//         $('.promote-banner').animate({
//             height: adBannerHeight,
//             top: 0,
//             opacity: 1
//         }, 300);
//     }, 10);

//     $(window).on('resize', () => {
//         if (!$('.promote-banner').hasClass('hiden')) {
//             $('.promote-banner').css({
//                 height: $('.promote-banner a img').height()
//             });
//         }
//     });
// }