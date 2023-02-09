import{_ as s,o as e,c as n,a}from"./app.4e3aa610.js";const l=JSON.parse('{"title":"Vue 및 웹 컴포넌트","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vue에서 사용자 정의 앨리먼트 사용","slug":"using-custom-elements-in-vue","link":"#using-custom-elements-in-vue","children":[{"level":3,"title":"컴포넌트 리졸브 건너뛰기","slug":"skipping-component-resolution","link":"#skipping-component-resolution","children":[]},{"level":3,"title":"DOM 속성 전달","slug":"passing-dom-properties","link":"#passing-dom-properties","children":[]}]},{"level":2,"title":"Vue로 사용자 정의 앨리먼트 구축","slug":"building-custom-elements-with-vue","link":"#building-custom-elements-with-vue","children":[{"level":3,"title":"defineCustomElement","slug":"definecustomelement","link":"#definecustomelement","children":[]},{"level":3,"title":"SFC as Custom Element","slug":"sfc-as-custom-element","link":"#sfc-as-custom-element","children":[]},{"level":3,"title":"Tips for a Vue Custom Elements Library","slug":"tips-for-a-vue-custom-elements-library","link":"#tips-for-a-vue-custom-elements-library","children":[]}]},{"level":2,"title":"Web Components vs. Vue Components","slug":"web-components-vs-vue-components","link":"#web-components-vs-vue-components","children":[]}],"relativePath":"guide/extras/web-components.md"}'),o={name:"guide/extras/web-components.md"},p=[a('<h1 id="vue-and-web-components" tabindex="-1">Vue 및 웹 컴포넌트 <a class="header-anchor" href="#vue-and-web-components" aria-hidden="true">#</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank" rel="noreferrer">웹 컴포넌트</a>는 개발자가 재사용 가능한 사용자 정의 앨리먼트를 만들 수 있는 웹 네이티브 API 집합을 포괄적으로 지칭하는 용어입니다.</p><p>워드프레스닷컴은 Vue와 웹 컴포넌트를 주로 상호 보완적인 기술로 간주합니다. Vue는 사용자 정의 앨리먼트의 사용과 생성을 모두 훌륭하게 지원합니다. 사용자 지정 앨리먼트를 기존 Vue 애플리케이션에 통합하든, 사용자 지정 앨리먼트를 빌드하고 배포하는 데 Vue를 사용하든 관계없이 좋은 회사에서 사용할 수 있습니다.</p><h2 id="using-custom-elements-in-vue" tabindex="-1">Vue에서 사용자 정의 앨리먼트 사용 <a class="header-anchor" href="#using-custom-elements-in-vue" aria-hidden="true">#</a></h2><p>Vue는 <a href="https://custom-elements-everywhere.com/libraries/vue/results/results.html" target="_blank" rel="noreferrer">사용자 정의 엘리먼트 에브리웨어 테스트에서 100% 만점을 받았습니다</a>. Vue 애플리케이션 내에서 사용자 정의 앨리먼트를 사용하는 것은 기본 HTML 앨리먼트를 사용하는 것과 거의 동일하게 작동하지만 몇 가지 유의해야 할 사항이 있습니다:</p><h3 id="skipping-component-resolution" tabindex="-1">컴포넌트 리졸브 건너뛰기 <a class="header-anchor" href="#skipping-component-resolution" aria-hidden="true">#</a></h3><p>기본적으로 Vue는 네이티브가 아닌 HTML 태그를 사용자 정의 앨리먼트로 렌더링하기 전에 등록된 Vue 컴포넌트로 확인하려고 시도합니다. 이로 인해 Vue는 개발 중에 &quot;컴포넌트를 확인하지 못했습니다&quot;라는 경고를 표시합니다. 특정 앨리먼트를 사용자 정의 앨리먼트로 처리하고 컴포넌트 확인을 건너뛰어야 한다는 것을 Vue에 알리기 위해 <a href="/api/application.html#app-config-compiler옵션"><code>compilerOptions.isCustomElement</code> 옵션</a>을 지정할 수 있습니다.</p><p>빌드 설정과 함께 Vue를 사용하는 경우 이 옵션은 컴파일 타임 옵션이므로 빌드 설정을 통해 전달해야 합니다.</p><h4 id="example-in-browser-config" tabindex="-1">브라우저 내 구성 예시 <a class="header-anchor" href="#example-in-browser-config" aria-hidden="true">#</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// 브라우저 내 컴파일을 사용하는 경우에만 작동합니다.</span></span>\n<span class="line"><span style="color:#676E95;">// 빌드 도구를 사용하는 경우 아래 구성 예제를 참조하세요.</span></span>\n<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">compilerOptions</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isCustomElement</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> tag</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">includes</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><h4 id="example-vite-config" tabindex="-1">Vite 구성 예시 <a class="header-anchor" href="#example-vite-config" aria-hidden="true">#</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// vite.config.js</span></span>\n<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> vue </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vitejs/plugin-vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">vue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">compilerOptions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">// 대시가 있는 모든 태그를 사용자 지정 앨리먼트로 취급합니다.</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#82AAFF;">isCustomElement</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> tag</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">includes</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">  ]</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h4 id="example-vue-cli-config" tabindex="-1">Vue CLI 구성 예시 <a class="header-anchor" href="#example-vue-cli-config" aria-hidden="true">#</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// vue.config.js</span></span>\n<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">chainWebpack</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">module</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">rule</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">tap</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">options</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">        compilerOptions</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">// ion-으로 시작하는 모든 태그를 사용자 지정 앨리먼트로 취급합니다.</span></span>\n<span class="line"><span style="color:#F07178;">          </span><span style="color:#82AAFF;">isCustomElement</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tag</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startsWith</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ion-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">))</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h3 id="passing-dom-properties" tabindex="-1">DOM 속성 전달 <a class="header-anchor" href="#passing-dom-properties" aria-hidden="true">#</a></h3><p>DOM 속성은 문자열만 가능하므로 복잡한 데이터를 사용자 정의 앨리먼트에 DOM 속성으로 전달해야 합니다. 사용자 정의 앨리먼트에 프로퍼티를 설정할 때 Vue 3는 <code>in</code> 연산자를 사용하여 DOM 속성 존재 여부를 자동으로 확인하고 키가 있는 경우 값을 DOM 속성으로 설정하는 것을 선호합니다. 즉, 대부분의 경우 사용자 정의 앨리먼트가 <a href="https://web.dev/custom-elements-best-practices/" target="_blank" rel="noreferrer">권장 모범 사례</a>를 따르는 경우 이에 대해 생각할 필요가 없습니다.</p><p>그러나 드물게 데이터를 DOM 프로퍼티로 전달해야 하지만 사용자 정의 앨리먼트가 프로퍼티를 제대로 정의/반영하지 않는 경우(<code>in</code> 체크가 실패하는 경우)가 있을 수 있습니다. 이 경우 &#39;.prop&#39; 수정자를 사용하여 <code>v-bind</code> 바인딩이 DOM 속성으로 설정되도록 강제할 수 있습니다:</p><div class="language-vue-html"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">my-element</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">user</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">prop</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">{ </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">jack</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">my-element</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;">&lt;!-- shorthand equivalent --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">my-element</span><span style="color:#89DDFF;"> .</span><span style="color:#C792EA;">user</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{ name: &#39;jack&#39; }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">my-element</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h2 id="building-custom-elements-with-vue" tabindex="-1">Vue로 사용자 정의 앨리먼트 구축 <a class="header-anchor" href="#building-custom-elements-with-vue" aria-hidden="true">#</a></h2><p>사용자 정의 앨리먼트의 주요 이점은 프레임워크와 함께 사용하거나 프레임워크 없이도 사용할 수 있다는 것입니다. 따라서 최종 소비자가 동일한 프론트엔드 스택을 사용하지 않을 수 있는 컴포넌트를 배포하거나 최종 애플리케이션을 사용하는 컴포넌트의 구현 세부 사항으로부터 격리하려는 경우에 이상적입니다.</p><h3 id="definecustomelement" tabindex="-1">defineCustomElement <a class="header-anchor" href="#definecustomelement" aria-hidden="true">#</a></h3><p>Vue는 <a href="/api/general.html#definecustomelement"><code>defineCustomElement</code></a> 메서드를 통해 정확히 동일한 Vue 컴포넌트 API를 사용하여 사용자 정의 앨리먼트를 생성할 수 있도록 지원합니다. 이 메서드는 <a href="/api/general.html#definecomponent"><code>defineComponent</code></a>와 동일한 인자를 허용하지만 대신 <code>HTMLElement</code>를 확장하는 사용자 정의 엘리먼트 생성자를 반환합니다:</p><div class="language-vue-html"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">my-vue-element</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">my-vue-element</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineCustomElement</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> MyVueElement </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineCustomElement</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// normal Vue component options here</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">props</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">emits</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">`</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// defineCustomElement only: CSS to be injected into shadow root</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">styles</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">/* inlined css */</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;">]</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;">// Register the custom element.</span></span>\n<span class="line"><span style="color:#676E95;">// After registration, all `&lt;my-vue-element&gt;` tags</span></span>\n<span class="line"><span style="color:#676E95;">// on the page will be upgraded.</span></span>\n<span class="line"><span style="color:#A6ACCD;">customElements</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">define</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">my-vue-element</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> MyVueElement)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;">// You can also programmatically instantiate the element:</span></span>\n<span class="line"><span style="color:#676E95;">// (can only be done after registration)</span></span>\n<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#A6ACCD;">(</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyVueElement</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// initial props (optional)</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><h4 id="lifecycle" tabindex="-1">생명주기 <a class="header-anchor" href="#lifecycle" aria-hidden="true">#</a></h4><ul><li><p>Vue 사용자 정의 앨리먼트는 앨리먼트의 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks" target="_blank" rel="noreferrer"><code>connectedCallback</code></a>이 처음 호출될 때 섀도 루트 내부에 내부 Vue 컴포넌트 인스턴스를 마운트합니다.</p></li><li><p>앨리먼트의 <code>disconnectedCallback</code>이 호출되면 Vue는 마이크로태스크 틱 후 앨리먼트가 문서에서 분리되었는지 여부를 확인합니다.</p><ul><li><p>앨리먼트가 여전히 문서에 있으면 이동으로 간주되며 컴포넌트 인스턴스가 보존됩니다;</p></li><li><p>앨리먼트가 문서에서 분리되면 제거가 되고 컴포넌트 인스턴스가 마운트 해제됩니다.</p></li></ul></li></ul><h4 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h4><ul><li><p><code>prop</code> 옵션을 사용하여 선언된 모든 prop은 사용자 정의 앨리먼트에 속성으로 정의됩니다. Vue는 적절한 경우 속성/프로퍼티 간의 반영을 자동으로 처리합니다.</p><ul><li><p>속성은 항상 해당 속성에 반영됩니다.</p></li><li><p>기본값(<code>string</code>, <code>boolean</code> 또는 <code>number</code>)이 있는 속성은 속성으로 반영됩니다.</p></li></ul></li><li><p>또한 <code>부울</code> 또는 <code>숫자</code> 유형으로 선언된 프로퍼티는 속성으로 설정될 때(항상 문자열인) 원하는 유형으로 자동 형변환됩니다. 예를 들어 다음 props 선언이 있습니다:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">props</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">selected</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Boolean</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">index</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Number</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>그리고 사용자 정의 앨리먼트 사용법:</p><div class="language-vue-html"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">my-element</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">selected</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">index</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">my-element</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>컴포넌트에서 <code>selected</code>는 <code>true</code>(부울)로 캐스팅되고 <code>index</code>는 <code>1</code>(숫자)로 캐스팅됩니다.</p></li></ul><h4 id="events" tabindex="-1">이벤트 <a class="header-anchor" href="#events" aria-hidden="true">#</a></h4><p><code>this.$emit</code> 또는 설정 <code>emit</code>을 통해 전송된 이벤트는 사용자 정의 앨리먼트에서 기본 <a href="https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events#adding_custom_data_%E2%80%93_customevent" target="_blank" rel="noreferrer">CustomEvents</a>로 디스패치됩니다. 추가 이벤트 인자(페이로드)는 CustomEvent 객체의 <code>detail</code> 속성으로 배열로 노출됩니다.</p><h4 id="slots" tabindex="-1">슬롯 <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h4><p>컴포넌트 내부에서 슬롯은 평소처럼 <code>&lt;슬slot롯/&gt;</code> 앨리먼트를 사용하여 렌더링할 수 있습니다. 하지만 결과 앨리먼트를 소비할 때는 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots" target="_blank" rel="noreferrer">네이티브 슬롯 구문</a>만 허용합니다:</p><ul><li><p><a href="/guide/components/slots.html#scoped-slots">Scoped slots</a>는 지원하지 않습니다.</p></li><li><p>명명된 슬롯을 전달할 때는 <code>v-slot</code> 지시어 대신 <code>슬롯</code> 속성을 사용하십시오:</p><div class="language-vue-html"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">my-element</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">slot</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">named</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">hello</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">my-element</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div></li></ul><h4 id="provide-inject" tabindex="-1">Provide / Inject <a class="header-anchor" href="#provide-inject" aria-hidden="true">#</a></h4><p>The <a href="/guide/components/provide-inject.html#provide-inject">Provide / Inject API</a> and its <a href="/api/composition-api-dependency-injection.html#provide">Composition API equivalent</a> also work between Vue-defined custom elements. However, note that this works <strong>only between custom elements</strong>. i.e. a Vue-defined custom element won&#39;t be able to inject properties provided by a non-custom-element Vue component.</p><h3 id="sfc-as-custom-element" tabindex="-1">SFC as Custom Element <a class="header-anchor" href="#sfc-as-custom-element" aria-hidden="true">#</a></h3><p><code>defineCustomElement</code> also works with Vue Single-File Components (SFCs). However, with the default tooling setup, the <code>&lt;style&gt;</code> inside the SFCs will still be extracted and merged into a single CSS file during production build. When using an SFC as a custom element, it is often desirable to inject the <code>&lt;style&gt;</code> tags into the custom element&#39;s shadow root instead.</p><p>The official SFC toolings support importing SFCs in &quot;custom element mode&quot; (requires <code>@vitejs/plugin-vue@^1.4.0</code> or <code>vue-loader@^16.5.0</code>). An SFC loaded in custom element mode inlines its <code>&lt;style&gt;</code> tags as strings of CSS and exposes them under the component&#39;s <code>styles</code> option. This will be picked up by <code>defineCustomElement</code> and injected into the element&#39;s shadow root when instantiated.</p><p>To opt-in to this mode, simply end your component file name with <code>.ce.vue</code>:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineCustomElement</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Example </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./Example.ce.vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(Example</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">styles) </span><span style="color:#676E95;">// [&quot;/* inlined css */&quot;]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;">// convert into custom element constructor</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> ExampleElement </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineCustomElement</span><span style="color:#A6ACCD;">(Example)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;">// register</span></span>\n<span class="line"><span style="color:#A6ACCD;">customElements</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">define</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">my-example</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ExampleElement)</span></span>\n<span class="line"></span></code></pre></div><p>If you wish to customize what files should be imported in custom element mode (for example, treating <em>all</em> SFCs as custom elements), you can pass the <code>customElement</code> option to the respective build plugins:</p><ul><li><a href="https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#using-vue-sfcs-as-custom-elements" target="_blank" rel="noreferrer">@vitejs/plugin-vue</a></li><li><a href="https://github.com/vuejs/vue-loader/tree/next#v16-only-options" target="_blank" rel="noreferrer">vue-loader</a></li></ul><h3 id="tips-for-a-vue-custom-elements-library" tabindex="-1">Tips for a Vue Custom Elements Library <a class="header-anchor" href="#tips-for-a-vue-custom-elements-library" aria-hidden="true">#</a></h3><p>When building custom elements with Vue, the elements will rely on Vue&#39;s runtime. There is a ~16kb baseline size cost depending on how many features are being used. This means it is not ideal to use Vue if you are shipping a single custom element - you may want to use vanilla JavaScript, <a href="https://github.com/vuejs/petite-vue" target="_blank" rel="noreferrer">petite-vue</a>, or frameworks that specialize in small runtime size. However, the base size is more than justifiable if you are shipping a collection of custom elements with complex logic, as Vue will allow each component to be authored with much less code. The more elements you are shipping together, the better the trade-off.</p><p>If the custom elements will be used in an application that is also using Vue, you can choose to externalize Vue from the built bundle so that the elements will be using the same copy of Vue from the host application.</p><p>It is recommended to export the individual element constructors to give your users the flexibility to import them on-demand and register them with desired tag names. You can also export a convenience function to automatically register all elements. Here&#39;s an example entry point of a Vue custom element library:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineCustomElement</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Foo </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./MyFoo.ce.vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Bar </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./MyBar.ce.vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> MyFoo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineCustomElement</span><span style="color:#A6ACCD;">(Foo)</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> MyBar </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineCustomElement</span><span style="color:#A6ACCD;">(Bar)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;">// export individual elements</span></span>\n<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">MyFoo</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">MyBar</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">register</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">customElements</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">define</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">my-foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">MyFoo</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">customElements</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">define</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">my-bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">MyBar</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>If you have many components, you can also leverage build tool features such as Vite&#39;s <a href="https://vitejs.dev/guide/features.html#glob-import" target="_blank" rel="noreferrer">glob import</a> or webpack&#39;s <a href="https://webpack.js.org/guides/dependency-management/#requirecontext" target="_blank" rel="noreferrer"><code>require.context</code></a> to load all components from a directory.</p><h2 id="web-components-vs-vue-components" tabindex="-1">Web Components vs. Vue Components <a class="header-anchor" href="#web-components-vs-vue-components" aria-hidden="true">#</a></h2><p>Some developers believe that framework-proprietary component models should be avoided, and that exclusively using Custom Elements makes an application &quot;future-proof&quot;. Here we will try to explain why we believe that this is an overly simplistic take on the problem.</p><p>There is indeed a certain level of feature overlap between Custom Elements and Vue Components: they both allow us to define reusable components with data passing, event emitting, and lifecycle management. However, Web Components APIs are relatively low-level and bare-bones. To build an actual application, we need quite a few additional capabilities which the platform does not cover:</p><ul><li><p>A declarative and efficient templating system;</p></li><li><p>A reactive state management system that facilitates cross-component logic extraction and reuse;</p></li><li><p>A performant way to render the components on the server and hydrate them on the client (SSR), which is important for SEO and <a href="https://web.dev/vitals/" target="_blank" rel="noreferrer">Web Vitals metrics such as LCP</a>. Native custom elements SSR typically involves simulating the DOM in Node.js and then serializing the mutated DOM, while Vue SSR compiles into string concatenation whenever possible, which is much more efficient.</p></li></ul><p>Vue&#39;s component model is designed with these needs in mind as a coherent system.</p><p>With a competent engineering team, you could probably build the equivalent on top of native Custom Elements - but this also means you are taking on the long-term maintenance burden of an in-house framework, while losing out on the ecosystem and community benefits of a mature framework like Vue.</p><p>There are also frameworks built using Custom Elements as the basis of their component model, but they all inevitably have to introduce their proprietary solutions to the problems listed above. Using these frameworks entails buying into their technical decisions on how to solve these problems - which, despite what may be advertised, doesn&#39;t automatically insulate you from potential future churns.</p><p>There are also some areas where we find custom elements to be limiting:</p><ul><li><p>Eager slot evaluation hinders component composition. Vue&#39;s <a href="/guide/components/slots.html#scoped-slots">scoped slots</a> are a powerful mechanism for component composition, which can&#39;t be supported by custom elements due to native slots&#39; eager nature. Eager slots also mean the receiving component cannot control when or whether to render a piece of slot content.</p></li><li><p>Shipping custom elements with shadow DOM scoped CSS today requires embedding the CSS inside JavaScript so that they can be injected into shadow roots at runtime. They also result in duplicated styles in markup in SSR scenarios. There are <a href="https://github.com/whatwg/html/pull/4898/" target="_blank" rel="noreferrer">platform features</a> being worked on in this area - but as of now they are not yet universally supported, and there are still production performance / SSR concerns to be addressed. In the meanwhile, Vue SFCs provide <a href="/api/sfc-css-features.html">CSS scoping mechanisms</a> that support extracting the styles into plain CSS files.</p></li></ul><p>Vue will always stay up to date with the latest standards in the web platform, and we will happily leverage whatever the platform provides if it makes our job easier. However, our goal is to provide solutions that work well and work today. That means we have to incorporate new platform features with a critical mindset - and that involves filling the gaps where the standards fall short while that is still the case.</p>',58)];const t=s(o,[["render",function(s,a,l,o,t,c){return e(),n("div",null,p)}]]);export{l as __pageData,t as default};
