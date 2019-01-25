webpackJsonp([58345136292746],{425:function(e,a){e.exports={data:{markdownRemark:{html:'<p>One of the key ideas behind Reactive Search and Reactive Maps is the reactive design pattern, which allows defining how a component reacts to changes in the states of the sensors. This allows almost all ReactiveSearch components to watch each other and update their data reactively. For example, a <a href="/reactive-manual/vue/list-components/singlelist.html">SingleList</a> component can update its data based on the search term in a <a href="/reactive-manual/vue/search-components/datasearch.html">DataSearch</a> component.</p>\n<h3 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>data<span class="token operator">-</span>search\n    <span class="token operator">...</span>\n    <span class="token punctuation">:</span>react<span class="token operator">=</span><span class="token template-string"><span class="token string">`{\n      "and": "citySensor",\n      "or": "searchSensor"\n    }`</span></span>\n<span class="token operator">></span>\n</code></pre>\n      </div>\n<h3 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h3>\n<ul>\n<li>\n<p><strong>react</strong> <code>Object</code><br>\n<code>react</code> prop is available in components whose data view should reactively update when on or more dependent components change their states, e.g. <a href="/reactive-manual/vue/map-components/reactivemap.html"><code>ReactiveMap</code></a>, <a href="/reactive-manual/vue/basic-components/reactivelist.html"><code>ReactiveList</code></a>.</p>\n<ul>\n<li>\n<p><strong>key</strong> <code>String</code><br>\none of <code>and</code>, <code>or</code>, <code>not</code> defines the combining clause.</p>\n<ul>\n<li><strong>and</strong> clause implies that the results will be filtered by matches from <strong>all</strong> of the associated component states.</li>\n<li><strong>or</strong> clause implies that the results will be filtered by matches from <strong>at least one</strong> of the associated component states.</li>\n<li><strong>not</strong> clause implies that the results will be filtered by an <strong>inverse</strong> match of the associated component states.</li>\n</ul>\n</li>\n<li>\n<p><strong>value</strong> <code>String or Array or Object</code>  </p>\n<ul>\n<li><code>String</code> is used for specifying a single component by its <code>componentId</code>.</li>\n<li><code>Array</code> is used for specifying multiple components by their <code>componentId</code>.</li>\n<li><code>Object</code> is used for nesting other key clauses.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<p>An example of a <code>react</code> clause where all three clauses are used and values are <code>Object</code>, <code>Array</code> and <code>String</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>data<span class="token operator">-</span>search\n  <span class="token operator">...</span>\n  <span class="token punctuation">:</span>react<span class="token operator">=</span><span class="token template-string"><span class="token string">`{\n    "and": {\n        "or": ["CityComp", "TopicComp"],\n        "not": "BlacklistComp"\n    }\n  }`</span></span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<p>Here, we are specifying that the UI should update whenever one of the blacklist items is not present and simultaneously any one of city or topics matches.</p>',frontmatter:{title:"React Prop",next:"advanced/reactivecomponent.html",prev:"advanced/customquery.html",nextTitle:"Reactive Component",prevTitle:"Defining Custom Queries"},fields:{path:"docs/advanced/React.md",slug:"advanced/react.html"}}},pathContext:{slug:"advanced/react.html"}}}});
//# sourceMappingURL=path---advanced-react-html-c458c414f03e8c755337.js.map