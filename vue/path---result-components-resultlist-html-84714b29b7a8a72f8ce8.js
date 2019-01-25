webpackJsonp([0x831c0b6278f7],{448:function(n,a){n.exports={data:{markdownRemark:{html:'<p><img src="https://i.imgur.com/oevEwGb.png" alt="Imgur"></p>\n<p><code>ResultList</code> creates a result list UI component to display results in a list layout, suited for data that needs a compact display.</p>\n<p>Example uses:</p>\n<ul>\n<li>showing e-commerce search listings.</li>\n<li>showing filtered hotel booking results.</li>\n</ul>\n<blockquote>\n<p>Note</p>\n<p>An alternative layout to ResultList is a <a href="/reactive-manual/vue/result-components/resultcard.html"><strong>ResultCard</strong></a>, which displays result data in a card layout.</p>\n</blockquote>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result-list</span>\n        <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>SearchResult<span class="token punctuation">"</span></span>\n        <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>original_title.raw<span class="token punctuation">"</span></span>\n        <span class="token attr-name">:from</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>\n        <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span>\n        <span class="token attr-name">:renderData</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>booksList<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script language-javascript">\n    methods<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token function">booksList</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token punctuation">{</span>\n                title<span class="token punctuation">:</span> data<span class="token punctuation">.</span>original_title<span class="token punctuation">,</span>\n                image<span class="token punctuation">:</span> data<span class="token punctuation">.</span>image<span class="token punctuation">,</span>\n                description<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`\n                    &lt;div>\n                        &lt;p>\n                            &lt;em>by </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>authors<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/em>\n                        &lt;/p>\n                        &lt;p>\n                            &lt;b></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>average_rating<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/b> ⭐\n                        &lt;/p>\n                        &lt;span>Pub </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>original_publication_year<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>\n                    &lt;/div>\n                `</span></span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h3 id="usage-with-all-props"><a href="#usage-with-all-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage With All Props</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result-list</span>\n  <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>SearchResult<span class="token punctuation">"</span></span>\n  <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>original_title.raw<span class="token punctuation">"</span></span>\n  <span class="token attr-name">paginationAt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span>\n  <span class="token attr-name">:renderData</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>booksList<span class="token punctuation">"</span></span>\n  <span class="token attr-name">loader</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Loading Books..<span class="token punctuation">"</span></span>\n  <span class="token attr-name">sortBy</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>desc<span class="token punctuation">"</span></span>\n  <span class="token attr-name">:stream</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>\n  <span class="token attr-name">:pagination</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>\n  <span class="token attr-name">:pages</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span>\n  <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span>\n  <span class="token attr-name">:showResultStats</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>\n  <span class="token attr-name">:react</span><span class="token attr-value"><span class="token punctuation">=</span>`{</span>\n    <span class="token attr-name"><span class="token namespace">and:</span></span> <span class="token attr-name">["BookRatings",</span> <span class="token attr-name">"SearchSensor"]</span>\n  <span class="token attr-name">}`</span>\n<span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h2 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h2>\n<ul>\n<li>\n<p><strong>componentId</strong> <code>String</code><br>\nunique identifier of the component, can be referenced in other components’ <code>react</code> prop.</p>\n</li>\n<li>\n<p><strong>dataField</strong> <code>String</code><br>\ndata field to be connected to the component’s UI view. It is useful for providing a sorting context.</p>\n</li>\n<li>\n<p><strong>excludeFields</strong> <code>String Array</code> [optional]<br>\nfields to be excluded in search results.</p>\n</li>\n<li>\n<p><strong>includeFields</strong> <code>String Array</code> [optional]<br>\nfields to be included in search results.</p>\n</li>\n<li>\n<p><strong>stream</strong> <code>Boolean</code> [optional]<br>\nwhether to stream new result updates in the UI. Defaults to <code>false</code>. <code>stream: true</code> is appended to the streaming hit objects, which can be used to selectively react to streaming changes (eg. showing fade in animation on new streaming hits, Twitter/Facebook like streams, showing the count of new feed items available like <em>2 New Tweets</em>)</p>\n</li>\n<li>\n<p><strong>pagination</strong> <code>Boolean</code> [optional]<br>\npagination &#x3C;> infinite scroll switcher. Defaults to <code>false</code>, i.e. an infinite scroll based view. When set to <code>true</code>, a pagination based list view with page numbers will appear.</p>\n</li>\n<li>\n<p><strong>paginationAt</strong> <code>String</code> [optional]<br>\nDetermines the position where to show the pagination, only applicable when <strong>pagination</strong> prop is set to <code>true</code>. Accepts one of <code>top</code>, <code>bottom</code> or <code>both</code> as valid values. Defaults to <code>bottom</code>.</p>\n</li>\n<li>\n<p><strong>pages</strong> <code>Number</code> [optional]<br>\nnumber of user selectable pages to be displayed when pagination is enabled. Defaults to 5.</p>\n</li>\n<li>\n<p><strong>sortBy</strong> <code>String</code> [optional]<br>\nsort the results by either <code>asc</code> or <code>desc</code> order. It is an alternative to <code>sortOptions</code>, both can’t be used together.</p>\n</li>\n<li>\n<p><strong>sortOptions</strong> <code>Object Array</code> [optional]<br>\nan alternative to the <code>sortBy</code> prop, <code>sortOptions</code> creates a sorting view in the resultlist component’s UI. Each array element is an object that takes three keys:</p>\n<ul>\n<li><code>label</code> - label to be displayed in the UI.</li>\n<li><code>dataField</code> - data field to use for applying the sorting criteria on.</li>\n<li><code>sortBy</code> - specified as either <code>asc</code> or <code>desc</code>.</li>\n</ul>\n</li>\n<li>\n<p><strong>size</strong> <code>Number</code> [optional]<br>\nnumber of results to show per view. Defaults to 10.</p>\n</li>\n<li>\n<p><strong>loader</strong> <code>String|scoped-slot</code> [optional]<br>\ndisplay to show the user while the data is loading, accepts <code>String</code> or <code>JSX</code> markup.</p>\n</li>\n<li>\n<p><strong>showResultStats</strong> <code>Boolean</code> [optional]<br>\nwhether to show result stats in the form of results found and time taken. Defaults to <code>true</code>.</p>\n</li>\n<li>\n<p><strong>react</strong> <code>Object</code> [optional]<br>\na dependency object defining how this component should react based on the state changes in the sensor components.</p>\n</li>\n<li>\n<p><strong>URLParams</strong> <code>Boolean</code> [optional]<br>\nwhen set adds the current page number to the url. Only works when <code>pagination</code> is enabled.</p>\n</li>\n<li>\n<p><strong>renderData</strong> <code>Function|scoped-slot</code> [optional]<br>\nreturns a list element object to be rendered based on the <code>res</code> data object. This callback function prop is called for each data item rendered in the ResultList component’s view.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result-list</span>\n    <span class="token attr-name">:renderData</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>function(data){\n        return {\n            title: data.original_title,\n            image: data.image,\n            description: `\n                &lt;div>\n                    &lt;p>\n                        &lt;em>by ${data.authors}&lt;/em>\n                    &lt;/p>\n                    &lt;p>\n                        &lt;b>${data.average_rating}&lt;/b> ⭐\n                    &lt;/p>\n                    &lt;span>Pub ${data.original_publication_year}&lt;/span>\n                &lt;/div>\n            `,\n            containerProps:{\n                on: {\n                    mouseenter: () => console.log(<span class="token punctuation">\'</span>😄<span class="token punctuation">\'</span>),\n                    mouseleave: () => console.log(<span class="token punctuation">\'</span>🚀<span class="token punctuation">\'</span>)\n                }\n            }\n        };\n    }<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p><strong>renderResultStats</strong> <code>Function|scoped-slot</code> [optional]\nrenders custom result stats using a callback function that takes <code>stats</code> object as parameter and expects it to return a string or html. <code>stats</code> object contains following properties</p>\n<ul>\n<li><code>totalResults</code> - Total number of results found</li>\n<li><code>totalPages</code> - Total number of pages found based on current page size</li>\n<li><code>currentPage</code> - Current page number for which data is being rendered</li>\n<li><code>displayedResults</code> - Number of results displayed in current view</li>\n<li>\n<p><code>time</code> - Time taken to find total results</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token punctuation">:</span>renderResultStats<span class="token operator">=</span>"\n    <span class="token keyword">function</span><span class="token punctuation">(</span>stats<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token template-string"><span class="token string">`Showing </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>stats<span class="token punctuation">.</span>displayedResults<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> of total </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>stats<span class="token punctuation">.</span>totalResults<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> in </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>stats<span class="token punctuation">.</span>time<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> ms`</span></span>\n        <span class="token punctuation">)</span>   \n    <span class="token punctuation">}</span>\n"\n</code></pre>\n      </div>\n</li>\n</ul>\n</li>\n<li>\n<p><strong>defaultQuery</strong> <code>Function</code> [optional]<br>\napplies a default query to the result component. This query will be run when no other components are being watched (via React prop), as well as in conjunction with the query generated from the React prop. The function should return a query.</p>\n</li>\n<li>\n<p><strong>onNoResults</strong> <code>String</code> [optional]<br>\nshow custom message or component when no results founds.</p>\n</li>\n</ul>\n<h2 id="styles"><a href="#styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styles</h2>\n<p><code>resultlist</code> component supports <code>innerClass</code> prop with the following keys:    </p>\n<ul>\n<li><code>resultsInfo</code></li>\n<li><code>sortOptions</code></li>\n<li><code>resultStats</code></li>\n<li><code>noResults</code></li>\n<li><code>button</code></li>\n<li><code>pagination</code></li>\n<li><code>active</code></li>\n<li><code>list</code></li>\n<li><code>poweredBy</code></li>\n</ul>\n<p>Read more about it <a href="/reactive-manual/vue/theming/class.html">here</a>.</p>\n<h2 id="extending"><a href="#extending" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extending</h2>\n<p><code>resultlist</code> component can be extended to</p>\n<ol>\n<li>customize the look and feel with <code>className</code>,</li>\n<li>render individual result data items using <code>renderData</code>,</li>\n<li>connect with external interfaces using <code>queryChange</code>.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>resultlist\n  <span class="token operator">...</span>\n  className<span class="token operator">=</span><span class="token string">"custom-class"</span>\n  <span class="token punctuation">:</span>renderData<span class="token operator">=</span><span class="token template-string"><span class="token string">`\n    function({ item }) {\n      return(\n        &lt;div>\n          { item.data }\n        &lt;/div>\n      )\n    }\n  `</span></span>\n  @queryChange<span class="token operator">=</span><span class="token template-string"><span class="token string">`\n    function(prevQuery, nextQuery) {\n      // use the query with other js code\n      console.log(\'prevQuery\', prevQuery);\n      console.log(\'nextQuery\', nextQuery);\n    }\n  `</span></span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<ul>\n<li><strong>className</strong> <code>String</code><br>\nCSS class to be injected on the component container.</li>\n<li><strong>renderData</strong> <code>Function|scoped-slot</code> [optional]<br>\na callback function or scoped-slot where user can define how to render the view based on the data changes.</li>\n</ul>\n<blockquote>\n<p>Note</p>\n<p>The <code>streamResults</code> parameter will be <code>[]</code> unless <code>stream</code> prop is set to <code>true</code>. Check the <a href="/reactive-manual/vue/advanced/guides.html#handling-stream-updates">handling streaming</a> guide for more info.</p>\n</blockquote>\n<h2 id="events"><a href="#events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Events</h2>\n<ul>\n<li>\n<p><strong>queryChange</strong><br>\nis an event which accepts component’s <strong>prevQuery</strong> and <strong>nextQuery</strong> as parameters. It is called everytime the component’s query changes. This event is handy in cases where you want to generate a side-effect whenever the component’s query would change.</p>\n</li>\n<li>\n<p><strong>pageChange</strong><br>\ncalled when the current page is changed. If not defined, <code>window</code> will be scrolled to the top of the page.</p>\n</li>\n<li>\n<p><strong>pageClick</strong>\naccepts a function which is invoked with the updated page value when a pagination button is clicked. For example if ‘Next’ is clicked with the current page number as ‘1’, you would receive the value ‘2’ as the function parameter.</p>\n</li>\n<li>\n<p><strong>data</strong> <code>Function</code> [optional]\ngets triggered after data changes, which returns an object with these properties: <code>results</code>, <code>streamResults</code>, <code>loadMore</code>, <code>base</code> &#x26; <code>triggerClickAnalytics</code>.</p>\n</li>\n<li>\n<p><strong>resultStats</strong> <code>Function</code> [optional]\ngets triggered after stats changes, which returns an object with these properties:</p>\n<ul>\n<li><code>totalResults</code> - Total number of results found</li>\n<li><code>totalPages</code> - Total number of pages found based on current page size</li>\n<li><code>currentPage</code> - Current page number for which data is being rendered</li>\n<li><code>displayedResults</code> - Number of results displayed in current view</li>\n<li><code>time</code> - Time taken to find total results</li>\n</ul>\n</li>\n</ul>\n<blockquote>\n<p>Note:</p>\n<p>The fundamental difference between <code>pageChange</code> and <code>pageClick</code> is that <code>pageClick</code> is only called on a manual interaction with the pagination buttons, whereas, <code>pageChange</code> would also be invoked if some other side effects caused the results to update which includes updating filters, queries or changing pages. The behaviour of these two may change in the future versions as we come up with a better API.</p>\n</blockquote>\n<ul>\n<li><strong>error</strong>\ninvoked when query listener throws any error</li>\n</ul>',frontmatter:{title:"ResultList",next:null,prev:null,nextTitle:null,prevTitle:null},fields:{path:"docs/result-components/ResultList.md",slug:"result-components/resultlist.html"}}},pathContext:{slug:"result-components/resultlist.html"}}}});
//# sourceMappingURL=path---result-components-resultlist-html-84714b29b7a8a72f8ce8.js.map