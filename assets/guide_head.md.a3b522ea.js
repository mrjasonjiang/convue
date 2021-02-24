import{o as n,c as a,a as s}from"./app.d4385936.js";const t='{"title":"head tag","description":"","frontmatter":{},"headers":[{"level":2,"title":"Placeholder","slug":"placeholder"},{"level":2,"title":"Global Settings","slug":"global-settings"},{"level":2,"title":"Page individually set","slug":"page-individually-set"}],"relativePath":"guide/head.md","lastUpdated":1613802895465}',p={},e=s('<h1 id="head-tag"><a class="header-anchor" href="#head-tag" aria-hidden="true">#</a> head tag</h1><p>Under normal circumstances, the head tag contains title, meta and link tags, and the srcript tag is usually written at the end of the body.</p><p>Meta tags are also an important part of SEO.</p><h2 id="placeholder"><a class="header-anchor" href="#placeholder" aria-hidden="true">#</a> Placeholder</h2><p>-Pass \x3c!-- TITLE --\x3e placeholder title tag content -The meta and link tags that need to be loaded through the \x3c!-- HEAD --\x3e placeholder head tag -Via \x3c!-- APP --\x3e placeholder elements mounted by the vue instance and loading</p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!-- TITLE --&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- HEAD --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- APP --&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n      <span class="token comment">// ...</span>\n    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="global-settings"><a class="header-anchor" href="#global-settings" aria-hidden="true">#</a> Global Settings</h2><p>Passed in in the convue configuration item in vite.config.js is the global configuration</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>defineConfig<span class="token punctuation">}</span> <span class="token keyword">from</span><span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> convue <span class="token keyword">from</span><span class="token string">&#39;convue&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token operator">...</span><span class="token function">convue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      head<span class="token operator">:</span> <span class="token punctuation">{</span>\n        title<span class="token operator">:</span><span class="token string">&#39;Convue&#39;</span><span class="token punctuation">,</span>\n        meta<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token string">&#39;language&#39;</span><span class="token punctuation">,</span> content<span class="token operator">:</span><span class="token string">&#39;en-US&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token string">&#39;author&#39;</span><span class="token punctuation">,</span> content<span class="token operator">:</span><span class="token string">&#39;ziping&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        link<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            rel<span class="token operator">:</span><span class="token string">&#39;dns-prefetch&#39;</span><span class="token punctuation">,</span>\n            href<span class="token operator">:</span><span class="token string">&#39;https://www.googletagmanager.com&#39;</span><span class="token punctuation">,</span>\n            crossorigin<span class="token operator">:</span><span class="token string">&#39;crossorigin&#39;</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>\n            rel<span class="token operator">:</span><span class="token string">&#39;dns-prefetch&#39;</span><span class="token punctuation">,</span>\n            href<span class="token operator">:</span><span class="token string">&#39;https://www.google-analytics.com/analytics.js&#39;</span><span class="token punctuation">,</span>\n            crossorigin<span class="token operator">:</span><span class="token string">&#39;crossorigin&#39;</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>If the title is not passed, the name field in packgae.json will be taken by default.</p><h2 id="page-individually-set"><a class="header-anchor" href="#page-individually-set" aria-hidden="true">#</a> Page individually set</h2><p>We can also set the head separately for a certain page, and finally the head of the page will contain the content of the global settings plus the individual settings of the page.</p><p>The meta object is also used in the route tag.</p><div class="language-js"><pre><code><span class="token punctuation">{</span>\n  <span class="token comment">/* &lt;route&gt;\n  name:&#39;test&#39;\n  meta:\n    head:\n      title: Convue\n      meta:\n        -\n          name: language\n          content: en-US\n        -\n          name: author\n          content: ziping\n&lt;/route&gt; */</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span>defineComponent<span class="token punctuation">}</span> <span class="token keyword">from</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>For other rules, please <a href="/convue/config/head.html">refer to the head configuration item</a>.</p>',15);p.render=function(s,t,p,o,c,l){return n(),a("div",null,[e])};export default p;export{t as __pageData};
