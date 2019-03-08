webpackJsonp([0x6fbf96093e2d],{441:function(n,e){n.exports={data:{markdownRemark:{html:'<p><img src="https://i.imgur.com/33dxDWT.png" alt="Image to be displayed"></p>\n<p><code>ToggleButton</code> creates a toggle button UI component that is connected to a database field. It is used for filtering results based on a fixed set of toggle-able options.</p>\n<p>Example uses:</p>\n<ul>\n<li>filter movies by ratings between 1 and 5,</li>\n<li>display restaurants that accept delivery and are open now,</li>\n<li>show flight tickets by one way, round trip and multi-city options.</li>\n</ul>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>toggle<span class="token operator">-</span>button\n        componentId<span class="token operator">=</span><span class="token string">"MeetupTops"</span>\n        dataField<span class="token operator">=</span><span class="token string">"group_topics.topic_name.raw"</span>\n        <span class="token punctuation">:</span>data<span class="token operator">=</span>"<span class="token punctuation">[</span>\n            <span class="token punctuation">{</span><span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Social"</span><span class="token punctuation">,</span>   <span class="token string">"value"</span><span class="token punctuation">:</span> <span class="token string">"Social"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span><span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Travel"</span><span class="token punctuation">,</span>   <span class="token string">"value"</span><span class="token punctuation">:</span> <span class="token string">"Travel"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span><span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Outdoors"</span><span class="token punctuation">,</span> <span class="token string">"value"</span><span class="token punctuation">:</span> <span class="token string">"Outdoors"</span><span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>"\n    <span class="token operator">/</span><span class="token operator">></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h3 id="usage-with-all-props"><a href="#usage-with-all-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage With All Props</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>toggle<span class="token operator">-</span>button\n  componentId<span class="token operator">=</span><span class="token string">"MeetupTops"</span>\n  dataField<span class="token operator">=</span><span class="token string">"group_topics.topic_name.raw"</span>\n  title<span class="token operator">=</span><span class="token string">"Meetups"</span>\n  filterLabel<span class="token operator">=</span><span class="token string">"City"</span>\n  <span class="token punctuation">:</span>data<span class="token operator">=</span>"<span class="token punctuation">[</span>\n    <span class="token punctuation">{</span><span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Social"</span><span class="token punctuation">,</span>   <span class="token string">"value"</span><span class="token punctuation">:</span> <span class="token string">"Social"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span><span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Travel"</span><span class="token punctuation">,</span>   <span class="token string">"value"</span><span class="token punctuation">:</span> <span class="token string">"Travel"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span><span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Outdoors"</span><span class="token punctuation">,</span> <span class="token string">"value"</span><span class="token punctuation">:</span> <span class="token string">"Outdoors"</span><span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">]</span>"\n  <span class="token punctuation">:</span>defaultValue<span class="token operator">=</span><span class="token string">"[\'Social\']"</span>\n  <span class="token punctuation">:</span>multiSelect<span class="token operator">=</span><span class="token string">"true"</span>\n  <span class="token punctuation">:</span>showFilter<span class="token operator">=</span><span class="token string">"true"</span>\n  <span class="token punctuation">:</span>URLParams<span class="token operator">=</span><span class="token string">"false"</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<h2 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h2>\n<ul>\n<li><strong>componentId</strong> <code>String</code><br>\nunique identifier of the component, can be referenced in other components’ <code>react</code> prop.</li>\n<li><strong>dataField</strong> <code>String</code><br>\ndata field to be connected to the component’s UI view.</li>\n<li><strong>data</strong> <code>Object Array</code><br>\ncollection of UI <code>labels</code> with associated <code>value</code> to be matched against the database field.</li>\n<li><strong>title</strong> <code>String</code> or <code>JSX</code> [optional]<br>\ntitle of the component to be shown in the UI.</li>\n<li><strong>defaultValue</strong> <code>String</code> or <code>Array</code> [optional]<br>\nan array of default selected label(s) to pre-select one or more buttons.</li>\n<li><strong>value</strong> <code>String Array</code> [optional]<br>\ncontrols the current value of the component. It selects the label (on mount and on update). Use this prop in conjunction with <code>onChange</code> function.</li>\n<li><strong>multiSelect</strong> <code>Boolean</code> [optional]<br>\nwhether multiple buttons can be selected, defaults to <strong>true</strong>. When set to <strong>false</strong>, only one button can be selected.</li>\n<li><strong>nestedField</strong> <code>String</code> [optional]<br>\nuse to set the <code>nested</code>  mapping field that allows arrays of objects to be indexed in a way that they can be queried independently of each other. Applicable only when dataField is a part of <code>nested</code> type.</li>\n<li><strong>showFilter</strong> <code>Boolean</code> [optional]<br>\nshow as filter when a value is selected in a global selected filters view. Defaults to <code>true</code>.</li>\n<li><strong>filterLabel</strong> <code>String</code> [optional]<br>\nAn optional label to display for the component in the global selected filters view. This is only applicable if <code>showFilter</code> is enabled. Default value used here is <code>componentId</code>.</li>\n<li><strong>URLParams</strong> <code>Boolean</code> [optional]<br>\nenable creating a URL query string parameter based on the selected value of the list. This is useful for sharing URLs with the component state. Defaults to <code>false</code>.</li>\n</ul>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<br/>\n<iframe src="https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/next/packages/vue/examples/toggle-button" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>\n<h2 id="styles"><a href="#styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styles</h2>\n<p><code>ToggleButton</code> component supports <code>innerClass</code> prop with the following keys:    </p>\n<ul>\n<li><code>title</code></li>\n<li><code>button</code></li>\n</ul>\n<p>Read more about it <a href="/reactive-manual/vue/theming/class.html">here</a>.</p>\n<h2 id="extending"><a href="#extending" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extending</h2>\n<p><code>ToggleButton</code> component can be extended to</p>\n<ol>\n<li>customize the look and feel with <code>className</code>,</li>\n<li>update the underlying DB query with <code>customQuery</code>,</li>\n<li>connect with external interfaces using <code>beforeValueChange</code>, <code>valueChange</code> and <code>queryChange</code>.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>toggle<span class="token operator">-</span>button\n  <span class="token operator">...</span>\n  className<span class="token operator">=</span><span class="token string">"custom-class"</span>\n  <span class="token punctuation">:</span>customQuery<span class="token operator">=</span><span class="token template-string"><span class="token string">`\n    function(value, props) {\n      return {\n        query: {\n          match: {\n            data_field: "this is a test"\n          }\n        }\n      }\n    }\n  `</span></span>\n  <span class="token punctuation">:</span>beforeValueChange<span class="token operator">=</span><span class="token template-string"><span class="token string">`\n    function(value) {\n      // called before the value is set\n      // returns a promise\n      return new Promise((resolve, reject) => {\n        // update state or component props\n        resolve()\n        // or reject()\n      })\n    }\n  `</span></span>\n  @ValueChange<span class="token operator">=</span><span class="token template-string"><span class="token string">`\n    function(value) {\n      console.log("current value: ", value)\n      // set the state\n      // use the value with other js code\n    }\n  `</span></span>\n  @queryChange<span class="token operator">=</span><span class="token template-string"><span class="token string">`\n    function(prevQuery, nextQuery) {\n      // use the query with other js code\n      console.log(\'prevQuery\', prevQuery);\n      console.log(\'nextQuery\', nextQuery);\n    }\n  `</span></span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<ul>\n<li><strong>customQuery</strong> <code>Function</code>\ntakes <strong>value</strong> and <strong>props</strong> as parameters and <strong>returns</strong> the data query to be applied to the component, as defined in Elasticsearch Query DSL.\n<code>Note:</code> customQuery is called on value changes in the <strong>ToggleButton</strong> component as long as the component is a part of <code>react</code> dependency of at least one other component.</li>\n<li><strong>beforeValueChange</strong> <code>Function</code><br>\nis a callback function which accepts component’s future <strong>value</strong> as a parameter and <strong>returns</strong> a promise. It is called everytime before a component’s value changes. The promise, if and when resolved, triggers the execution of the component’s query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.</li>\n</ul>\n<h2 id="events"><a href="#events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Events</h2>\n<ul>\n<li>\n<p><strong>queryChange</strong><br>\nis an event which accepts component’s <strong>prevQuery</strong> and <strong>nextQuery</strong> as parameters. It is called everytime the component’s query changes. This event is handy in cases where you want to generate a side-effect whenever the component’s query would change.</p>\n</li>\n<li>\n<p><strong>valueChange</strong><br>\nis an event which accepts component’s current <strong>value</strong> as a parameter. It is called everytime the component’s value changes. This event is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a list item is selected in a “Discounted Price” SingleList.</p>\n</li>\n<li>\n<p><strong>error</strong>\ngets triggered in case of an error and provides the <code>error</code> object, which can be used for debugging or giving feedback to the user if needed.</p>\n</li>\n<li>\n<p><strong>change</strong>\ngets triggered when you are using the <code>value</code> props and the component’s value changes.</p>\n</li>\n</ul>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p><a href="https://reactivesearch-vue-playground.netlify.com/?selectedKind=Base%20components%2FToggleButton&selectedStory=Basic&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs" target="_blank">Basic ToggleButton</a></p>',frontmatter:{title:"ToggleButton",next:"/range-components/singlerange.html",prev:"/list-components/multidropdownlist.html",nextTitle:"Range Components: SingleRange",prevTitle:"MultiDropdownList"},fields:{path:"docs/list-components/ToggleButton.md",slug:"list-components/togglebutton.html"}}},pathContext:{slug:"list-components/togglebutton.html"}}}});
//# sourceMappingURL=path---list-components-togglebutton-html-2bee2c5a8f8f76272fe2.js.map