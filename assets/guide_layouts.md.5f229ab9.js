import{o as n,c as a,a as s}from"./app.d4385936.js";const t='{"title":"Layout","description":"","frontmatter":{},"headers":[{"level":2,"title":"Change the layout of the current page","slug":"change-the-layout-of-the-current-page"}],"relativePath":"guide/layouts.md","lastUpdated":1613802924098}',e={},o=s('<h1 id="layout"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> Layout</h1><p>Layout refers to the container component of a public area of the website.</p><p>By default, convue will load the .vue|.js|.jsx|.ts|.tsx file in the /src/layouts directory and import it into the routing table. The default loaded is default[.vue|.js|.jsx|. ts|.tsx].</p><p>The router-view component must be included in the file.</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>defineComponent<span class="token punctuation">}</span> <span class="token keyword">from</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n   <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n     <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>\n       <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\n         <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token keyword">default</span> layout<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>\n         <span class="token operator">&lt;</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span>\n       <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n     <span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="change-the-layout-of-the-current-page"><a class="header-anchor" href="#change-the-layout-of-the-current-page" aria-hidden="true">#</a> Change the layout of the current page</h2><p>Add a route tag to the file and specify the layout in meta. The value of layout corresponds to the file name under /src/layouts.</p><div class="language-js"><pre><code><span class="token punctuation">{</span>\n   <span class="token comment">/* &lt;route&gt;\n   name:&#39;test&#39;\n   meta:\n     title: 111\n     layout: empty\n&lt;/route&gt; */</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span>defineComponent<span class="token punctuation">}</span> <span class="token keyword">from</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n   <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n     <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>For other rules, please <a href="/convue/config/layout.html">refer to layout configuration items</a>.</p>',9);e.render=function(s,t,e,p,c,l){return n(),a("div",null,[o])};export default e;export{t as __pageData};
