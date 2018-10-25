webpackJsonp([64106737349458],{481:function(n,e){n.exports={data:{markdownRemark:{html:'<p><img src="https://i.imgur.com/Q87ks8I.png" alt="ReactiveMap Image"></p>\n<p>A <code>ReactiveMap</code> creates a data-driven map UI component. It is the key component for build map based experiences.</p>\n<p>Example uses:</p>\n<ul>\n<li>showing a map of user checkins by city and topics for powering discovery based experiences.</li>\n<li>displaying restaurants filtered by a nearby distance query on a map.</li>\n</ul>\n<h3 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h3>\n<h4 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveMap</span>\n    <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>MapUI<span class="token punctuation">"</span></span>\n    <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>location<span class="token punctuation">"</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Venue Location Map<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h4 id="usage-with-all-props"><a href="#usage-with-all-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage With All Props</h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>ReactiveMap\n    componentId<span class="token operator">=</span><span class="token string">"MapUI"</span>\n    dataField<span class="token operator">=</span><span class="token string">"location"</span>\n    title<span class="token operator">=</span><span class="token string">"Venue Location Map"</span>\n    size<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span>\n    defaultZoom<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">13</span><span class="token punctuation">}</span>\n    defaultCenter<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> lat<span class="token punctuation">:</span> <span class="token number">37.74</span><span class="token punctuation">,</span> lng<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">122.45</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    showMapStyles<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n    defaultMapStyle<span class="token operator">=</span><span class="token string">"Standard"</span>\n    showMarkerClusters<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n    showSearchAsMove<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n    searchAsMove<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n    onPopoverClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onPopoverClick<span class="token punctuation">}</span>\n\n    stream<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n\n    <span class="token comment">// \'react\' defines when and how the map component should update</span>\n    react<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n      and<span class="token punctuation">:</span> <span class="token string">"CitySensor"</span>\n    <span class="token punctuation">}</span><span class="token punctuation">}</span>\n\n    <span class="token comment">// map events</span>\n    onData<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onData<span class="token punctuation">}</span>\n\n    <span class="token comment">// less useful props</span>\n    autoCenter<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<h3 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h3>\n<ul>\n<li><strong>componentId</strong> <code>String</code><br>\nunique identifier of the component, can be referenced in other components’ <code>react</code> prop.</li>\n<li><strong>dataField</strong> <code>String</code><br>\nDB data field to be connected to the component’s UI view, usually of a geopoint (i.e. location) data type and used for rendering the markers on the map.</li>\n<li><strong>title</strong> <code>String or JSX</code> [optional]<br>\ntitle of the component to be shown in the UI.</li>\n<li><strong>size</strong> <code>Number</code> [optional]<br>\nnumber of results to show in the map view, can be a number in the range [1, 1000]. Defaults to 100.</li>\n<li><strong>defaultZoom</strong> <code>Number</code> [optional]<br>\npreset map’s zoom level, accepts integer values between [0, 20]. 0 is the minimum zoom level, where you can see the entire globe. 20 is the maximum zoom level. Defaults to 13.</li>\n<li><strong>defaultCenter</strong> <code>Object</code> [optional]<br>\npreset map’s center position by specifying an object with valid <code>lat</code> and <code>lng</code> values. This prop, when set, will cause the component to run a geo-distance query with a distance of 10mi (Refer: <code>defaultRadius</code> and <code>unit</code> prop to configure the distance).</li>\n<li><strong>center</strong> <code>Object</code> [optional]<br>\nset map’s center position by specifying an object with valid <code>lat</code> and <code>lng</code> values. This prop, when set, will cause the component to run a geo-distance query with a distance of 10mi (Refer: <code>defaultRadius</code> and <code>unit</code> prop to configure the distance).</li>\n<li><strong>defaultRadius</strong> <code>Number</code> [optional]<br>\nused as distance value for the geo-distance query when <code>defaultCenter</code> or <code>center</code> is set. It accepts all positive integers.</li>\n<li><strong>unit</strong> <code>String</code> [optional]<br>\nunit for distance measurement, uses <code>mi</code> (for miles) by default. Distance units can be specified from the following:<br>\n<img src="https://i.imgur.com/STbeagk.png" alt="screenshot"></li>\n<li><strong>showMapStyles</strong> <code>Boolean</code> [optional]<br>\nwhether to show map styles dropdown picker in the map UI. Defaults to <code>true</code>.</li>\n<li><strong>defaultMapStyle</strong> <code>String</code> [optional]<br>\npreset a map style for the map UI. Available options include “Standard”, “Blue Essence”, “Blue Water”, “Flat Map”, “Light Monochrome”, “Midnight Commander”, “Unsaturated Browns”.</li>\n<li><strong>showMarkers</strong> <code>Boolean</code> [optional]<br>\nwhether to show the markers on the map, defaults to <code>true</code>. Sometimes, it doesn’t make sense to display markers (when building a heatmap or weather map or a directions navigation map)</li>\n<li><strong>defaultPin</strong> <code>String</code> [optional]<br>\nURL of the default marker pin image to be shown. It comes with a default image. Should only be set if you wish to use a custom marker.</li>\n<li><strong>showMarkerClusters</strong> <code>Boolean</code> [optional]<br>\nwhether to aggregate and form a cluster of nearby markers. Defaults to <code>true</code>.</li>\n<li><strong>showSearchAsMove</strong> <code>Boolean</code> [optional]<br>\nwhether to show the <em>Search As I Move</em> checkbox in the UI. Defaults to <code>true</code>.</li>\n<li><strong>searchAsMove</strong> <code>Boolean</code> [optional]<br>\nwhether to set the <em>Search As I Move</em> checkbox. Defaults to <code>false</code>.</li>\n<li><strong>onPopoverClick</strong> <code>function</code> [optional]<br>\na function that takes one argument for getting a marker’s data and returns an HTML markup to be displayed in the popover box.</li>\n<li><strong>autoClosePopover</strong> <code>Boolean</code> [optional]<br>\nautomatically closes the exisiting open popovers when <code>onPopoverClick</code> gets fired. Defaults to <code>false</code>.</li>\n<li><strong>stream</strong> <code>Boolean</code> [optional]<br>\nwhether to stream new result (aka realtime view) updates in the UI. Defaults to <code>false</code>.</li>\n<li>\n<p><strong>react</strong> <code>Object</code><br>\nspecify dependent components to reactively update <strong>GeoDistanceDropdown’s</strong> options. Read more about it <a href="/reactive-manual/advanced/react.html">here</a>.</p>\n<ul>\n<li>\n<p><strong>key</strong> <code>String</code><br>\none of <code>and</code>, <code>or</code>, <code>not</code> defines the combining clause.</p>\n<ul>\n<li><strong>and</strong> clause implies that the results will be filtered by matches from <strong>all</strong> of the associated component states.</li>\n<li><strong>or</strong> clause implies that the results will be filtered by matches from <strong>at least one</strong> of the associated component states.</li>\n<li><strong>not</strong> clause implies that the results will be filtered by an <strong>inverse</strong> match of the associated component states.</li>\n</ul>\n</li>\n<li>\n<p><strong>value</strong> <code>String or Array or Object</code>  </p>\n<ul>\n<li><code>String</code> is used for specifying a single component by its <code>componentId</code>.</li>\n<li><code>Array</code> is used for specifying multiple components by their <code>componentId</code>.</li>\n<li><code>Object</code> is used for nesting other key clauses.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><strong>autoCenter</strong> <code>Boolean</code> [optional]<br>\nwhether to auto center the map based on the geometric center of all the location markers. Defaults to <code>false</code>.</li>\n<li>\n<p><strong>streamAutoCenter</strong> <code>Boolean</code> [optional]<br>\nwhether to auto center the map based on the geometric center of all the location markers while <code>stream</code> prop is set to <code>true</code>. Defaults to <code>false</code>.</p>\n<!-- - **autoMarkerPosition** `Boolean` [optional]  \nwhether to set the rotation angle of the marker image based on the delta changes in its location, useful when displaying realtime traffic data. Defaults to `false`. -->\n</li>\n<li><strong>className</strong> <code>String</code><br>\nCSS class to be injected on the component container.</li>\n<li><strong>style</strong> <code>Object</code><br>\nCSS style object to be applied to the <code>ReactiveMap</code> component.</li>\n<li><strong>onData</strong> <code>function</code><br>\nevent fired when one or more markers are indexed, updated or removed from the map. It takes an object with the following formats (<code>label</code>, <code>icon</code>, <code>custom</code>):</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token comment">// To render the given text in the marker </span>\nonData<span class="token operator">=</span><span class="token punctuation">{</span>result <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> result<span class="token punctuation">.</span>title<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n\n<span class="token comment">// To render a marker image </span>\nonData<span class="token operator">=</span><span class="token punctuation">{</span>result <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    icon<span class="token punctuation">:</span> <span class="token string">\'https://i.imgur.com/NHR2tYL.png\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n\n<span class="token comment">// To render a custom markup (as label) in the marker position </span>\nonData<span class="token operator">=</span><span class="token punctuation">{</span>result <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    custom<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>result<span class="token punctuation">.</span>mag<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<br />\n<iframe height=\'500\' scrolling=\'no\' title=\'ReactiveMap Example\' src=\'//codepen.io/dhruvdutt/embed/KRwmvz/?height=500&theme-id=light&embed-version=2\' frameborder=\'no\' allowtransparency=\'true\' allowfullscreen=\'true\' style=\'width: 100%;\'>See the Pen <a href=\'https://codepen.io/dhruvdutt/pen/KRwmvz/\'>ReactiveMap Example</a> by Dhruvdutt Jadhav (<a href=\'https://codepen.io/dhruvdutt\'>@dhruvdutt</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<h2 id="styles"><a href="#styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styles</h2>\n<p><code>ReactiveMap</code> component supports <code>innerClass</code> prop with the following keys:    </p>\n<ul>\n<li><code>title</code></li>\n<li><code>input</code></li>\n<li><code>list</code></li>\n<li><code>checkboxContainer</code></li>\n<li><code>checkbox</code></li>\n<li><code>label</code></li>\n<li><code>select</code></li>\n<li><code>icon</code></li>\n<li><code>count</code></li>\n<li><code>button</code></li>\n<li><code>pagination</code></li>\n<li><code>active</code></li>\n</ul>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p><a href="https://opensource.appbase.io/playground/?selectedKind=Map%20Components%2FReactiveMap&selectedStory=Basic&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs" target="_blank">ReactiveMap with all the default props</a></p>',frontmatter:{title:"ReactiveMap",next:null,prev:"map-components/geodistancedropdown.html",nextTitle:null,prevTitle:"GeoDistanceDropdown"},fields:{path:"docs/map-components/ReactiveMap.md",slug:"map-components/reactivemap.html"}}},pathContext:{slug:"map-components/reactivemap.html"}}}});
//# sourceMappingURL=path---map-components-reactivemap-html-54d98ff12db14764f27f.js.map