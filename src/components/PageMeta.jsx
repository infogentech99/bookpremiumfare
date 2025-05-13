// // src/components/PageMeta.jsx
// import { useLayoutEffect } from 'react';

// export default function PageMeta({
//   title,
//   description,
//   canonical,
//   keywords,
// }) {
//   useLayoutEffect(() => {
//     if (title) document.title = title;

//     if (description) {
//       let el = document.querySelector("meta[name='description']");
//       if (!el) {
//         el = document.createElement('meta');
//         el.name = 'description';
//         document.head.appendChild(el);
//       }
//       el.content = description;
//     }

//     if (keywords) {
//       let kw = document.querySelector("meta[name='keywords']");
//       if (!kw) {
//         kw = document.createElement('meta');
//         kw.name = 'keywords';
//         document.head.appendChild(kw);
//       }
//       kw.content = Array.isArray(keywords)
//         ? keywords.join(', ')
//         : keywords;
//     }

//     if (canonical) {
//       let link = document.querySelector("link[rel='canonical']");
//       if (!link) {
//         link = document.createElement('link');
//         link.rel = 'canonical';
//         document.head.appendChild(link);
//       }
//       link.href = canonical;
//     }
//   }, [
//     title,
//     description,
//     canonical,
//     Array.isArray(keywords) ? keywords.join() : keywords,
//   ]);

//   return null;
// }
