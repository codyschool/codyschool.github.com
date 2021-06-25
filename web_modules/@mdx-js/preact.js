import { createContext as q, createElement as a$1, Fragment as y } from '../preact.js';
import { useContext as F } from '../preact/hooks.js';
import { x } from '../common/compat.module-f375f598.js';

const p=q({}),c=e=>t=>{const r=a(t.components);return a$1(e,Object.assign({},t,{components:r}))},a=e=>{const n=F(p);return "function"==typeof e?e(n):{...n,...e}},i=({components:e,children:t,disableParentContext:r})=>{let o=a(e);return r&&(o=e),a$1(p.Provider,{value:o},t)},l={inlineCode:"code",wrapper:({children:e})=>a$1(y,{},e)},s=x((e,t)=>{const{components:r,mdxType:o,originalType:p,parentName:c,...i}=e,s=a(r);return a$1(s[`${c}.${o}`]||s[o]||l[o]||p,r?{ref:t,...i,components:r}:{ref:t,...i})});function m(e,t){const r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){const p=r.length,c=new Array(p);c[0]=s;const a={};for(let e in t)hasOwnProperty.call(t,e)&&(a[e]=t[e]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(let e=2;e<p;e++)c[e]=r[e];return a$1.apply(null,c)}return a$1.apply(null,r)}s.displayName="MDXCreateElement";

export { p as MDXContext, i as MDXProvider, m as mdx, a as useMDXComponents, c as withMDXComponents };
