webpackJsonp([37162140274120],{493:function(n,s){n.exports={data:{markdownRemark:{html:'<p><img src="https://i.imgur.com/iY2csRm.png" alt="Image to be displayed"></p>\n<p><code>ReactiveList</code> creates a data-driven result list UI component. This list can reactively update itself based on changes in other components or changes in the database itself.</p>\n<p>This component forms the base for building more specific result display components like <a href="/reactive-manual/search-components/resultcard.html"><code>ResultCard</code></a> or <a href="/reactive-manual/search-components/resultlist.html"><code>ResultList</code></a>.</p>\n<p>Example uses:</p>\n<ul>\n<li>showing a feed of results based on the applied search criteria.</li>\n<li>streaming realtime feed updates based on applied criteria like in a newsfeed.</li>\n</ul>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>ReactiveList\n  react<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    <span class="token string">"and"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"CitySensor"</span><span class="token punctuation">,</span> <span class="token string">"SearchSensor"</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span>\n  onData<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>res<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<h3 id="usage-with-all-props"><a href="#usage-with-all-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage With All Props</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>ReactiveList\n  componentId<span class="token operator">=</span><span class="token string">"SearchResult"</span>\n  dataField<span class="token operator">=</span><span class="token string">"ratings"</span>\n  stream<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n  pagination<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>\n  paginationAt<span class="token operator">=</span><span class="token string">"bottom"</span>\n  pages<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span>\n  sortBy<span class="token operator">=</span><span class="token string">"desc"</span>\n  size<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span>\n  loader<span class="token operator">=</span><span class="token string">"Loading Results.."</span>\n  showResultStats<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n  onData<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>res<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n  onResultStats<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>total<span class="token punctuation">,</span> took<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">"found "</span> <span class="token operator">+</span> total <span class="token operator">+</span> <span class="token string">" results in "</span> <span class="token operator">+</span> took <span class="token operator">+</span> <span class="token string">"ms."</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span>\n  react<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    and<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"CitySensor"</span><span class="token punctuation">,</span> <span class="token string">"SearchSensor"</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<h2 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h2>\n<ul>\n<li><strong>componentId</strong> <code>String</code><br>\nunique identifier of the component, can be referenced in other components’ <code>react</code> prop.</li>\n<li><strong>dataField</strong> <code>String</code><br>\ndata field to be connected to the component’s UI view. It is useful for providing a sorting context.</li>\n<li><strong>excludeFields</strong> <code>String Array</code> [optional]<br>\nfields to be excluded in search results.</li>\n<li><strong>includeFields</strong> <code>String Array</code> [optional]<br>\nfields to be included in search results.</li>\n<li><strong>stream</strong> <code>Boolean</code> [optional]<br>\nwhether to stream new result updates in the UI. Defaults to <code>false</code>. <code>stream: true</code> is appended to the streaming hit objects, which can be used to selectively react to streaming changes (eg. showing fade in animation on new streaming hits, Twitter/Facebook like streams, showing the count of new feed items available like <em>2 New Tweets</em>)</li>\n<li><strong>scrollTarget</strong> <code>String</code> [optional]<br>\naccepts <code>id</code> of the container you wish to apply infinite loading on. <strong>Note:</strong> The container should be scrollable.</li>\n<li><strong>pagination</strong> <code>Boolean</code> [optional]<br>\npagination &#x3C;> infinite scroll switcher. Defaults to <code>false</code>, i.e. an infinite scroll based view. When set to <code>true</code>, a pagination based list view with page numbers will appear.</li>\n<li><strong>paginationAt</strong> <code>String</code> [optional]<br>\nDetermines the position where to show the pagination, only applicable when <strong>pagination</strong> prop is set to <code>true</code>. Accepts one of <code>top</code>, <code>bottom</code> or <code>both</code> as valid values. Defaults to <code>bottom</code>.</li>\n<li><strong>pages</strong> <code>Number</code> [optional]<br>\nnumber of user selectable pages to be displayed when pagination is enabled. Defaults to 5.</li>\n<li><strong>onPageChange</strong> <code>Function</code> [optional]<br>\nexecutes when the current page is changed. If not defined, <code>window</code> will be scrolled to the top of the page.</li>\n<li><strong>onPageClick</strong> <code>Function</code> [optional]<br>\naccepts a function which is invoked with the updated page value when a pagination button is clicked. For example if ‘Next’ is clicked with the current page number as ‘1’, you would receive the value ‘2’ as the function parameter.</li>\n</ul>\n<blockquote>\n<p>Note:</p>\n<p>The fundamental difference between <code>onPageChange</code> and <code>onPageClick</code> is that <code>onPageClick</code> is only called on a manual interaction with the pagination buttons, whereas, <code>onPageChange</code> would also be invoked if some other side effects caused the results to update which includes updating filters, queries or changing pages. The behaviour of these two may change in the future versions as we come up with a better API.</p>\n</blockquote>\n<ul>\n<li><strong>sortBy</strong> <code>String</code> [optional]<br>\nsort the results by either <code>asc</code> or <code>desc</code> order. It is an alternative to <code>sortOptions</code>, both can’t be used together.</li>\n<li>\n<p><strong>sortOptions</strong> <code>Object Array</code> [optional]<br>\nan alternative to the <code>sortBy</code> prop, <code>sortOptions</code> creates a sorting view in the ReactiveList component’s UI. Each array element is an object that takes three keys:</p>\n<ul>\n<li><code>label</code> - label to be displayed in the UI.</li>\n<li><code>dataField</code> - data field to use for applying the sorting criteria on.</li>\n<li><code>sortBy</code> - specified as either <code>asc</code> or <code>desc</code>.</li>\n</ul>\n</li>\n<li><strong>size</strong> <code>Number</code> [optional]<br>\nnumber of results to show per view. Defaults to 10.</li>\n<li><strong>loader</strong> <code>String or JSX</code> [optional]<br>\ndisplay to show the user while the data is loading, accepts <code>String</code> or <code>JSX</code> markup.</li>\n<li><strong>showResultStats</strong> <code>Boolean</code> [optional]<br>\nwhether to show result stats in the form of results found and time taken. Defaults to <code>true</code>.</li>\n<li><strong>onResultStats</strong> <code>Function</code> [optional]<br>\nrenders custom result stats using a function that takes two parameters for <code>total_results</code> and <code>time_taken</code> and expects it to return a string or JSX.</li>\n<li><strong>react</strong> <code>Object</code> [optional]<br>\na dependency object defining how this component should react based on the state changes in the sensor components.</li>\n<li><strong>URLParams</strong> <code>Boolean</code> [optional]<br>\nwhen set adds the current page number to the url. Only works when <code>pagination</code> is enabled.</li>\n<li>\n<p><strong>onData</strong> <code>Function</code> [optional]<br>\nreturns a list element object to be rendered based on the <code>res</code> data object. This callback function prop is called for each data item rendered in the <strong>ReactiveList</strong> component’s view. For example,</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>onData<span class="token operator">=</span><span class="token punctuation">{</span>\n  <span class="token keyword">function</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token punctuation">(</span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span>\n\t\t\t\t<span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>full_row single-record single_record_for_clone<span class="token punctuation">"</span></span>\n\t\t\t\t<span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>res<span class="token punctuation">.</span>_id<span class="token punctuation">}</span></span>\n\t\t\t<span class="token punctuation">></span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-container full_row<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> paddingLeft<span class="token punctuation">:</span> <span class="token string">"10px"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-head text-overflow full_row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-head-info text-overflow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t\t\t\t\t<span class="token punctuation">{</span>res<span class="token punctuation">.</span>name <span class="token operator">?</span> res<span class="token punctuation">.</span>name <span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">}</span> <span class="token operator">-</span> <span class="token punctuation">{</span>res<span class="token punctuation">.</span>brand <span class="token operator">?</span> res<span class="token punctuation">.</span>brand <span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">}</span>\n\t\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n\t\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-head-city<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>res<span class="token punctuation">.</span>brand <span class="token operator">?</span> res<span class="token punctuation">.</span>brand <span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-description text-overflow full_row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>highlight_tags<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t\t\t\t\t<span class="token punctuation">{</span>res<span class="token punctuation">.</span>price <span class="token operator">?</span> <span class="token template-string"><span class="token string">`Priced at $</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>res<span class="token punctuation">.</span>price<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span> <span class="token punctuation">:</span> <span class="token string">"Free Test Drive"</span><span class="token punctuation">}</span>\n\t\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n\t\t<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n<li><strong>onAllData</strong> <code>Function</code> [optional]<br>\nworks like <strong>onData</strong> prop but all the data objects are passed to the callback function.</li>\n<li><strong>defaultQuery</strong> <code>Function</code> [optional]<br>\napplies a default query to the result component. This query will be run when no other components are being watched (via React prop), as well as in conjunction with the query generated from the React prop. The function should return a query.</li>\n<li><strong>onNoResults</strong> <code>String or JSX</code> [optional]<br>\nshow custom message or component when no results founds.</li>\n</ul>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<br />\n<iframe src="https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/dev/packages/web/examples/ReactiveList" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>\n<h2 id="styles"><a href="#styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styles</h2>\n<p><code>ReactiveList</code> component supports <code>innerClass</code> prop with the following keys:    </p>\n<ul>\n<li><code>resultsInfo</code></li>\n<li><code>sortOptions</code></li>\n<li><code>resultStats</code></li>\n<li><code>noResults</code></li>\n<li><code>button</code></li>\n<li><code>pagination</code></li>\n<li><code>active</code></li>\n<li><code>list</code></li>\n<li><code>poweredBy</code></li>\n</ul>\n<p>Read more about it <a href="/reactive-manual/theming/class.html">here</a>.</p>\n<h2 id="extending"><a href="#extending" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extending</h2>\n<p><code>ReactiveList</code> component can be extended to</p>\n<ol>\n<li>customize the look and feel with <code>className</code>, <code>style</code>,</li>\n<li>render individual result data items using <code>onData</code>,</li>\n<li>render the entire result data using <code>onAllData</code>.</li>\n<li>connect with external interfaces using <code>onQueryChange</code>.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>ReactiveList\n  <span class="token operator">...</span>\n  className<span class="token operator">=</span><span class="token string">"custom-class"</span>\n  style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">"paddingBottom"</span><span class="token punctuation">:</span> <span class="token string">"10px"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>\n  onData<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span><span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span> res<span class="token punctuation">.</span>data <span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  onQueryChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>prevQuery<span class="token punctuation">,</span> nextQuery<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// use the query with other js code</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'prevQuery\'</span><span class="token punctuation">,</span> prevQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'nextQuery\'</span><span class="token punctuation">,</span> nextQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<ul>\n<li><strong>className</strong> <code>String</code><br>\nCSS class to be injected on the component container.</li>\n<li><strong>style</strong> <code>Object</code><br>\nCSS Styles to be applied to the <strong>ReactiveList</strong> component.</li>\n<li><strong>onData</strong> <code>Function</code> [optional]<br>\na callback function where user can define how to render the view based on the data changes.</li>\n<li>\n<p><strong>onAllData</strong> <code>Function</code> [optional]<br>\nan alternative callback function to <code>onData</code>, where user can define how to render the view based on all the data changes.<br>\n<br/>\nIt accepts three parameters: <code>results</code>, <code>streamResults</code> and <code>loadMoreData</code>.</p>\n<ul>\n<li><strong><code>results</code></strong>: An array of results obtained from the applied query.</li>\n<li><strong><code>streamResults</code></strong>: An array of results streamed since the applied query, aka realtime data. Here, a meta property <code>_updated</code> or <code>_deleted</code> is also present within a result object to denote if an existing object has been updated or deleted.</li>\n<li><strong><code>loadMoreData</code></strong>: A callback function to be called to load the next page of results into the view. The callback function is only applicable in the case of infinite loading view (i.e. <code>pagination</code> prop set to <code>false</code>).</li>\n</ul>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">onAllData</span><span class="token punctuation">(</span>results<span class="token punctuation">,</span> streamResults<span class="token punctuation">,</span> loadMoreData<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment">// return the list to render</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>Note</p>\n<p>The <code>streamResults</code> parameter will be <code>[]</code> unless <code>stream</code> prop is set to <code>true</code>. Check the <a href="/reactive-manual/advanced/guides.html#handling-stream-updates">handling streaming</a> guide for more info.</p>\n</blockquote>\n<ul>\n<li><strong>onQueryChange</strong> <code>Function</code><br>\nis a callback function which accepts component’s <strong>prevQuery</strong> and <strong>nextQuery</strong> as parameters. It is called everytime the component’s query changes. This prop is handy in cases where you want to generate a side-effect whenever the component’s query would change.</li>\n</ul>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p><a href="https://opensource.appbase.io/playground/?selectedKind=Result%20components%2FReactiveList" target="_blank">ReactiveList with default props</a></p>',frontmatter:{title:"ReactiveList",next:"advanced/theming.html",prev:"result-components/resultcard.html",nextTitle:"Theming",prevTitle:"ResultCard"},fields:{path:"docs/result-components/ReactiveList.md",slug:"result-components/reactivelist.html"}}},pathContext:{slug:"result-components/reactivelist.html"}}}});
//# sourceMappingURL=path---result-components-reactivelist-html-6982163fb6b7375f2802.js.map