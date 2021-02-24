import{o as n,c as s,a}from"./app.d4385936.js";const t='{"title":"convue","description":"","frontmatter":{},"headers":[{"level":2,"title":"Motivation and advantages","slug":"motivation-and-advantages"},{"level":2,"title":"Quick start","slug":"quick-start"},{"level":2,"title":"Using convue-cli","slug":"using-convue-cli"},{"level":2,"title":"Project directory","slug":"project-directory"}],"relativePath":"index.md","lastUpdated":1614179084200}',p={},e=a('<h1 id="convue"><a class="header-anchor" href="#convue" aria-hidden="true">#</a> convue</h1><p>convue is a plugin for vite based on vite and vue3 that gives you a set of experiences for rapid development projects, similar to nuxt and umi.js.Reference documents:<a href="https://ziping-li.github.io/convue/" target="_blank" rel="noopener noreferrer">https://ziping-li.github.io/convue/</a>.</p><h2 id="motivation-and-advantages"><a class="header-anchor" href="#motivation-and-advantages" aria-hidden="true">#</a> Motivation and advantages</h2><ol><li>umi.js does not support vue at the moment, and nuxt does not yet have perfect support for vue3 and vite.</li><li>convue is a plugin for vite, which is closer to the official vue base ecosystem and can integrate perfectly with other base libraries.</li><li>convue is only a development dependency, compared to other frameworks, the size of the build is almost 0.</li></ol><h2 id="quick-start"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick start</h2><ol><li>install convue.</li></ol><div class="language-bash"><pre><code><span class="token function">yarn</span> <span class="token function">add</span> convue -D\n</code></pre></div><ol start="2"><li>Use it in your project</li></ol><p>Use it in vite.config.js</p><div class="language-js"><pre><code><span class="token keyword">import</span> convue <span class="token keyword">from</span> <span class="token string">&#39;convue&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token operator">...</span><span class="token function">convue</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><ol start="3"><li>Introduce the required packages in main.js, or leave them out if you don&#39;t need them</li></ol><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;. /src/App.vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;pages-generated&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> globalComponent <span class="token keyword">from</span> <span class="token string">&#39;components-generated&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;store-generated&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> plugin <span class="token keyword">from</span> <span class="token string">&#39;plugin-generated&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> i18n <span class="token keyword">from</span> <span class="token string">&#39;locale-generated&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>\nwindow<span class="token punctuation">.</span>__APP__ <span class="token operator">=</span> app<span class="token punctuation">;</span> <span class="token comment">// To allow middleware to get the component instance, remove the line if you don&#39;t need to use it</span>\n\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>globalComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>plugin<span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>i18n<span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>Use all packages.</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;. /src/App.vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> convue <span class="token keyword">from</span> <span class="token string">&#39;convue-package&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>convue<span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="using-convue-cli"><a class="header-anchor" href="#using-convue-cli" aria-hidden="true">#</a> Using convue-cli</h2><p>convue provides a set of scaffolding tools for initializing projects, currently supporting both sfc (vue single file) and tsx development modes.</p><div class="language-bash"><pre><code><span class="token comment"># step 1</span>\n<span class="token function">yarn</span> global <span class="token function">add</span> convue-cli\n<span class="token comment"># step 2 - type convue on the command line, followed by a prompt to do</span>\nconvue\n<span class="token comment"># step 3 - enter the project file</span>\n<span class="token function">npm</span> run dev\n</code></pre></div><h2 id="project-directory"><a class="header-anchor" href="#project-directory" aria-hidden="true">#</a> Project directory</h2><p>convue uses an agreed-upon directory format, so we need to follow this development style. It is often an effective measure to achieve uniformity and efficiency in a project.</p><p>If you need to change the directory structure, you can <a href="https://ziping-li.github.io/convue/config/page" target="_blank" rel="noopener noreferrer">refer to the configuration item</a>.</p><p>Take the tsx form as an example.</p><div class="language-js"><pre><code>├── <span class="token keyword">public</span>\n├── src\n    ├─ components\n    ├── layouts\n        ├─ <span class="token keyword">default</span><span class="token punctuation">.</span>tsx\n    ├─ locales\n        ├─ en<span class="token operator">-</span><span class="token constant">US</span><span class="token punctuation">.</span>ts\n        ├── zh<span class="token operator">-</span><span class="token constant">CN</span><span class="token punctuation">.</span>ts\n    ├─ middleware\n    ├── pages\n        └── index<span class="token punctuation">.</span>tsx\n    ├─ plugins\n    ├─ store\n    └── App<span class="token punctuation">.</span>tsx\n├── <span class="token punctuation">.</span>babelrc\n├── <span class="token punctuation">.</span>eslintrc<span class="token punctuation">.</span>js\n├── <span class="token punctuation">.</span>gitignore\n├── <span class="token punctuation">.</span>prettierrc\n├─ <span class="token punctuation">.</span>stylelintrc<span class="token punctuation">.</span>json\n├── index<span class="token punctuation">.</span>html\n├─ <span class="token keyword">package</span><span class="token punctuation">.</span>json\n├─ shims<span class="token punctuation">.</span>d<span class="token punctuation">.</span>ts\n├─ tsconfig<span class="token punctuation">.</span>json\n├─ vite<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n├── yarn<span class="token punctuation">.</span>lock\n</code></pre></div>',22);p.render=function(a,t,p,o,c,i){return n(),s("div",null,[e])};export default p;export{t as __pageData};