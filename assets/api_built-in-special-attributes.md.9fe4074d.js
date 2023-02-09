import{_ as s,o as a,c as l,a as n}from"./app.4e3aa610.js";const p=JSON.parse('{"title":"빌트인 특수 속성","description":"","frontmatter":{},"headers":[{"level":2,"title":"key","slug":"key","link":"#key","children":[]},{"level":2,"title":"ref","slug":"ref","link":"#ref","children":[]},{"level":2,"title":"is","slug":"is","link":"#is","children":[]}],"relativePath":"api/built-in-special-attributes.md"}'),e={name:"api/built-in-special-attributes.md"},o=[n('<h1 id="built-in-special-attributes" tabindex="-1">빌트인 특수 속성 <a class="header-anchor" href="#built-in-special-attributes" aria-hidden="true">#</a></h1><h2 id="key" tabindex="-1">key <a class="header-anchor" href="#key" aria-hidden="true">#</a></h2><p>특수 속성 <code>key</code>는 Vue의 가상 DOM 알고리즘이 이전 목록과 새 노드 목록을 비교할 때 vnode를 식별하는 힌트로 주로 사용됩니다.</p><ul><li><p><strong>요구되는 값</strong>: <code>number | string | symbol</code></p></li><li><p><strong>세부 사항</strong>:</p><p>키가 없으면 Vue는 엘리먼트 이동을 최소화하고 동일한 유형의 엘리먼트를 가능한 한 제자리에서 패치/재사용하는 알고리즘을 사용합니다. 키를 사용하면 키의 순서 변경에 따라 엘리먼트를 재정렬하고 더 이상 존재하지 않는 키가 있는 엘리먼트는 항상 제거/파기됩니다.</p><p>동일한 공통 부모의 자식들은 <strong>고유 키</strong>가 있어야 합니다. 키가 중복되면 렌더링 에러가 발생합니다.</p><p><code>v-for</code>에서 가장 일반적으로 사용 됩니다:</p><div class="language-vue-html"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;"> in </span><span style="color:#A6ACCD;">items</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>또는 엘리먼트/컴포넌트를 재사용하는 대신 강제로 교체하는 데 사용할 수도 있습니다. 다음과 같은 경우에 유용할 수 있습니다:</p><ul><li>컴포넌트의 생명 주기 훅을 올바르게 트리거함.</li><li>트랜지션 트리거</li></ul><p>예제:</p><div class="language-vue-html"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">transition</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;"> text </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">transition</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p><code>text</code>가 변경되면 <code>&lt;span&gt;</code>이 패치 대신 항상 교체되므로 트랜지션이 트리거됩니다.</p></li><li><p><strong>참고</strong>: <a href="/guide/essentials/list.html#maintaining-state-with-key">가이드 - 리스트 렌더링: <code>key</code>를 통한 상태유지</a></p></li></ul><h2 id="ref" tabindex="-1">ref <a class="header-anchor" href="#ref" aria-hidden="true">#</a></h2><p><a href="/guide/essentials/template-refs.html">템플릿 참조</a>를 의미합니다.</p><ul><li><p><strong>요구되는 값</strong>: <code>string | Function</code></p></li><li><p><strong>세부 사항</strong>:</p><p><code>ref</code> is used to register a reference to an element or a child component.</p><p>In Options API, the reference will be registered under the component&#39;s <code>this.$refs</code> object:</p><p><code>ref</code>는 엘리먼트 또는 자식 컴포넌트를 참조하기 위해 사용됩니다.</p><p>옵션 API에서 참조는 컴포넌트의 <code>this.$refs</code> 객체 내에 등록됩니다.</p><div class="language-vue-html"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">&lt;!-- 저장됨: this.$refs.p --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">p</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">안녕!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>컴포지션 API에서 참조는 이름이 일치하는 <code>ref</code>에 저장됩니다.</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> p </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">p</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">안녕!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>일반 DOM 엘리먼트에서 사용되는 경우, 참조는 해당 엘리먼트가 됩니다. 자식 컴포넌트에 사용되는 경우, 참조는 자식 컴포넌트 인스턴스가 됩니다.</p><p><code>ref</code>는 함수를 사용하여 참조 저장을 완전히 제어할 수 있습니다:</p><div class="language-vue-html"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ChildComponent</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">) </span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">child</span><span style="color:#89DDFF;"> = </span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"></span></code></pre></div><p>참조 등록 타이밍에 대한 중요한 참고 사항: 참조는 렌더 함수의 결과로 생성되므로, 접근하기 전에 컴포넌트가 마운트될 때까지 기다려야 합니다.</p><p><code>this.$refs</code>도 반응형이 아니므로 데이터 바인딩을 위한 템플릿에서 사용하면 안됩니다.</p></li><li><p><strong>참고</strong>:</p><ul><li><a href="/guide/essentials/template-refs.html">가이드 - 템플릿 refs</a></li><li><a href="/guide/typescript/composition-api.html#typing-template-refs">Guide - 템플릿 Refs에 타입 적용하기Typing Template Refs</a> <sup class="vt-badge ts"></sup></li><li><a href="/guide/typescript/composition-api.html#typing-component-template-refs">Guide - 컴포넌트 템플릿 Refs에 타입 적용하기</a> <sup class="vt-badge ts"></sup></li></ul></li></ul><h2 id="is" tabindex="-1">is <a class="header-anchor" href="#is" aria-hidden="true">#</a></h2><p><a href="/guide/essentials/component-basics.html#dynamic-components">동적 컴포넌트</a> 바인딩에 사용합니다.</p><ul><li><p><strong>요구되는 값</strong>: <code>string | Component</code></p></li><li><p><strong>네이티브 엘리먼트에 사용</strong> <sup class="vt-badge">3.1+</sup></p><p><code>is</code> 속성이 네이티브 HTML 엘리먼트에 사용되면, 네이티브 웹 플랫폼 함수인 <a href="https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-customized-builtin-example" target="_blank" rel="noreferrer">커스터마이즈 빌트인 엘리먼트</a>로 해석됩니다.</p><p>그러나 <a href="/guide/essentials/component-basics.html#dom-template-parsing-caveats">DOM 템플릿 파싱 주의 사항</a>에 설명된 대로, 기본 엘리먼트를 Vue 컴포넌트로 교체하기 위해 Vue가 필요할 수 있는 사용 사례가 있습니다. Vue가 엘리먼트를 Vue 컴포넌트로 렌더링하도록 <code>is</code> 속성 값에 <code>vue:</code> 접두사를 붙일 수 있습니다:</p><div class="language-vue-html"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">table</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">is</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue:my-row-component</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">table</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>참고</strong>:</p><ul><li><a href="/api/built-in-special-elements.html#component">API - 특수 엘리먼트: <code>&lt;component&gt;</code></a></li><li><a href="/guide/essentials/component-basics.html#dynamic-components">가이드 - 컴포넌트 기초: 동적 컴포넌트</a></li></ul></li></ul>',10)];const t=s(e,[["render",function(s,n,p,e,t,c){return a(),l("div",null,o)}]]);export{p as __pageData,t as default};
