import{_ as s,o as n,c as p,a}from"./app.4e3aa610.js";const o=JSON.parse('{"title":"유틸리티 타입","description":"","frontmatter":{},"headers":[{"level":2,"title":"PropType<T>","slug":"proptype-t","link":"#proptype-t","children":[]},{"level":2,"title":"ComponentCustomProperties","slug":"componentcustomproperties","link":"#componentcustomproperties","children":[]},{"level":2,"title":"ComponentCustomOptions","slug":"componentcustomoptions","link":"#componentcustomoptions","children":[]},{"level":2,"title":"ComponentCustomProps","slug":"componentcustomprops","link":"#componentcustomprops","children":[]},{"level":2,"title":"CSSProperties","slug":"cssproperties","link":"#cssproperties","children":[]}],"relativePath":"api/utility-types.md"}'),l={name:"api/utility-types.md"},e=[a('<div class="warning custom-block"><p class="custom-block-title">현재 이 문서는 번역 작업이 진행중입니다</p></div><h1 id="utility-types" tabindex="-1">유틸리티 타입 <a class="header-anchor" href="#utility-types" aria-hidden="true">#</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>이 페이지에는 사용법에 대한 설명이 필요할 수 있는 일반적으로 사용되는 몇 가지 유틸리티 유형만 나열되어 있습니다. 내보낸 전체 유형 목록은 <a href="https://github.com/vuejs/core/blob/main/packages/runtime-core/src/index.ts#L131" target="_blank" rel="noreferrer">소스 코드</a>를 참조하세요.</p><p>This page only lists a few commonly used utility types that may need explanation for their usage. For a full list of exported types, consult the <a href="https://github.com/vuejs/core/blob/main/packages/runtime-core/src/index.ts#L131" target="_blank" rel="noreferrer">source code</a>.</p></div><h2 id="proptype-t" tabindex="-1">PropType&lt;T&gt; <a class="header-anchor" href="#proptype-t" aria-hidden="true">#</a></h2><p>런타임 프롭 선언을 사용할 때 고급 유형으로 프롭에 주석을 달 때 사용합니다.</p><p>Used to annotate a prop with more advanced types when using runtime props declarations.</p><ul><li><p><strong>예제</strong>:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">PropType</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Book</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">author</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">year</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">props</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">book</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// `객체`에 보다 구체적인 유형을 제공합니다.</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// provide more specific type to `Object`</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Object </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PropType</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Book</span><span style="color:#89DDFF;">&gt;,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">required</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>참고</strong>: <a href="/guide/typescript/options-api.html#typing-component-props">가이드 - Typing Component Props</a></p></li></ul><h2 id="componentcustomproperties" tabindex="-1">ComponentCustomProperties <a class="header-anchor" href="#componentcustomproperties" aria-hidden="true">#</a></h2><p>컴포넌트 인스턴스 유형을 보강하여 커스텀 글로벌 프로퍼티를 지원하는 데 사용됩니다.</p><p>Used to augment the component instance type to support custom global properties.</p><ul><li><p><strong>예제</strong>:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> axios </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">axios</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">module</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">ComponentCustomProperties</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    $http</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">axios</span></span>\n<span class="line"><span style="color:#F07178;">    $translate</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>증강은 모듈 <code>.ts</code> 또는 <code>.d.ts</code> 파일에 배치해야 합니다. 자세한 내용은 <a href="/guide/typescript/options-api.html#augmenting-global-properties">타입 증강 배치</a>를 참조하세요.</p><p>Augmentations must be placed in a module <code>.ts</code> or <code>.d.ts</code> file. See <a href="/guide/typescript/options-api.html#augmenting-global-properties">Type Augmentation Placement</a> for more details.</p></div></li><li><p><strong>참고</strong>: <a href="/guide/typescript/options-api.html#augmenting-global-properties">가이드 - Augmenting Global Properties</a></p></li></ul><h2 id="componentcustomoptions" tabindex="-1">ComponentCustomOptions <a class="header-anchor" href="#componentcustomoptions" aria-hidden="true">#</a></h2><p>사용자 지정 옵션을 지원하기 위해 컴포넌트 옵션 유형을 보강하는 데 사용됩니다.</p><p>Used to augment the component options type to support custom options.</p><ul><li><p><strong>예제</strong>:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Route</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue-router</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">module</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">ComponentCustomOptions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    beforeRouteEnter</span><span style="color:#89DDFF;">?(</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">from</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">next</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>증강은 모듈 <code>.ts</code> 또는 <code>.d.ts</code> 파일에 배치해야 합니다. 자세한 내용은 <a href="/guide/typescript/options-api.html#augmenting-global-properties">타입 증강 배치</a>를 참조하세요.</p><p>Augmentations must be placed in a module <code>.ts</code> or <code>.d.ts</code> file. See <a href="/guide/typescript/options-api.html#augmenting-global-properties">Type Augmentation Placement</a> for more details.</p></div></li><li><p><strong>참고</strong>: <a href="/guide/typescript/options-api.html#augmenting-custom-options">가이드 - Augmenting Custom Options</a></p></li></ul><h2 id="componentcustomprops" tabindex="-1">ComponentCustomProps <a class="header-anchor" href="#componentcustomprops" aria-hidden="true">#</a></h2><p>TSX 앨리먼트에 신고되지 않은 prop을 사용하기 위해 허용된 TSX prop을 보강하는 데 사용됩니다.</p><p>Used to augment allowed TSX props in order to use non-declared props on TSX elements.</p><ul><li><p><strong>예제</strong>:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">module</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">ComponentCustomProps</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    hello</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>\n<span class="line"></span></code></pre></div><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// 이제 hello가 선언된 prop이 아니어도 작동합니다.</span></span>\n<span class="line"><span style="color:#676E95;">// now works even if hello is not a declared prop</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">MyComponent</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">hello</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">world</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>증강은 모듈 <code>.ts</code> 또는 <code>.d.ts</code> 파일에 배치해야 합니다. 자세한 내용은 <a href="/guide/typescript/options-api.html#augmenting-global-properties">타입 증강 배치</a>를 참조하세요.</p><p>Augmentations must be placed in a module <code>.ts</code> or <code>.d.ts</code> file. See <a href="/guide/typescript/options-api.html#augmenting-global-properties">Type Augmentation Placement</a> for more details.</p></div></li></ul><h2 id="cssproperties" tabindex="-1">CSSProperties <a class="header-anchor" href="#cssproperties" aria-hidden="true">#</a></h2><p>스타일 속성 바인딩에서 허용되는 값을 보강하는 데 사용됩니다.</p><p>Used to augment allowed values in style property bindings.</p><ul><li><p><strong>예제</strong>:</p><p>Allow any custom CSS property</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">module</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">CSSProperties</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    [</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">--</span><span style="color:#89DDFF;">${</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}`</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">--bg-color</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">blue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}&gt;</span></span>\n<span class="line"></span></code></pre></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{ &#39;--bg-color&#39;: &#39;blue&#39; }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p></div></li></ul><p>증강은 모듈 <code>.ts</code> 또는 <code>.d.ts</code> 파일에 배치해야 합니다. 자세한 내용은 <a href="/guide/typescript/options-api.html#augmenting-global-properties">타입 증강 배치</a>를 참조하세요.</p><p>Augmentations must be placed in a module <code>.ts</code> or <code>.d.ts</code> file. See <a href="/guide/typescript/options-api.html#augmenting-global-properties">Type Augmentation Placement</a> for more details. :::</p><div class="info custom-block"><p class="custom-block-title">See also</p><p>SFC <code>&lt;스타일&gt;</code> 태그는 <code>v-bind CSS</code> 함수를 사용하여 CSS 값을 동적 컴포넌트 상태에 연결할 수 있도록 지원합니다. 이를 통해 유형 보강 없이 사용자 정의 속성을 사용할 수 있습니다.</p><p>SFC <code>&lt;style&gt;</code> tags support linking CSS values to dynamic component state using the <code>v-bind CSS</code> function. This allows for custom properties without type augmentation.</p><ul><li><a href="/api/sfc-css-features.html#v-bind-in-css">v-bind() in CSS</a></li></ul></div>',26)];const t=s(l,[["render",function(s,a,o,l,t,c){return n(),p("div",null,e)}]]);export{o as __pageData,t as default};
