import{o as n,c as a,a as s}from"./app.d4385936.js";const t='{"title":"Plugin","description":"","frontmatter":{},"headers":[{"level":2,"title":"Parameters","slug":"parameters"}],"relativePath":"guide/plugins.md","lastUpdated":1613802967358}',p={},e=s('<h1 id="plugin"><a class="header-anchor" href="#plugin" aria-hidden="true">#</a> Plugin</h1><p>By default, convue will automatically load the .js|.ts file in the /src/plugins directory.</p><p>For example, write a plugin file</p><div class="language-js"><pre><code><span class="token keyword">import</span> Antd <span class="token keyword">from</span><span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span><span class="token string">&#39;ant-design-vue/dist/antd.css&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> app <span class="token punctuation">}</span><span class="token punctuation">,</span> inject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n   app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Antd<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n   <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;sayHello&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello Convue!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><p>Access the sayHello function</p><div class="language-js"><pre><code><span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> toString <span class="token operator">=</span> instance<span class="token operator">?.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$toString<span class="token punctuation">;</span>\n</code></pre></div><h2 id="parameters"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><p>The function has two parameters, the first is the information about the component instance, and the second is the inject function (functions registered through the inject function will be automatically loaded into app.config.global.properties).</p><p>The first parameter description:</p><p>-app: current vue instance -store: access to global status -router: current routing object -route: current route information -env: list of environment variables</p><p>For other rules, please <a href="/convue/config/plugin.html">refer to plugin configuration item</a>.</p>',11);p.render=function(s,t,p,o,c,i){return n(),a("div",null,[e])};export default p;export{t as __pageData};
