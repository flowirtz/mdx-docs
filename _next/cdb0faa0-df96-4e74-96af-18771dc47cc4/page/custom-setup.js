module.exports=__NEXT_REGISTER_PAGE("/custom-setup",function(){return{page:webpackJsonp([7],{314:function(e,n,t){e.exports=t(315)},315:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),o=t.n(a),p=t(16);t.n(p);n.default=function(e){var n=e.components;!function(e,n){if(null==e)return{};var t,a,o={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(o[t]=e[t]);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(a=0;a<m.length;a++)t=m[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}}(e,["components"]);return o.a.createElement(p.MDXTag,{name:"wrapper",components:n},o.a.createElement(p.MDXTag,{name:"h1",components:n,props:{id:"custom-setup"}},"Custom Setup"),o.a.createElement(p.MDXTag,{name:"p",components:n},"MDX Docs is a component library intended for use with Next.js.\nThe quickest way to create a new setup is with the ",o.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npm init docs")," command, but if you have an existing Next.js app, follow the instructions below."),o.a.createElement(p.MDXTag,{name:"h2",components:n,props:{id:"add-mdx-support"}},"Add MDX support"),o.a.createElement(p.MDXTag,{name:"p",components:n},"If you haven't already, ensure your app is set up to handle MDX by\nconfiguring your ",o.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"next.config.js")," file to handle MDX."),o.a.createElement(p.MDXTag,{name:"p",components:n},"To use the plugin, follow ",o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://mdxjs.com/getting-started/next"}},"these directions from MDX"),"."),o.a.createElement(p.MDXTag,{name:"p",components:n},"To manually set up the mdx loader, install the dependencies and add the following to your ",o.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"next.config.js")," file."),o.a.createElement(p.MDXTag,{name:"pre",components:n},o.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh"}},"npm i @mdx-js/loader @mdx-js/mdx @mdx-js/tag\n")),o.a.createElement(p.MDXTag,{name:"pre",components:n},o.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"// next.config.js\nmodule.exports = {\n  pageExtensions: ['js', 'jsx', 'md', 'mdx'],\n  webpack: (config, { defaultLoaders }) => {\n    config.module.rules.push({\n      test: /.mdx?$/,\n      use: [\n        defaultLoaders.babel,\n        '@mdx-js/loader',\n      ]\n    })\n\n    return config\n  }\n}\n")),o.a.createElement(p.MDXTag,{name:"h2",components:n,props:{id:"add-mdx-docs-components-to-a-custom-app"}},"Add MDX Docs Components to a Custom App"),o.a.createElement(p.MDXTag,{name:"p",components:n},"Using a ",o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/zeit/next.js/#custom-app"}},"custom App"),", import and use the MDX Docs components to wrap your entire application."),o.a.createElement(p.MDXTag,{name:"pre",components:n},o.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh"}},"npm i mdx-docs\n")),o.a.createElement(p.MDXTag,{name:"pre",components:n},o.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import React from 'react'\nimport App, { Container } from 'next/app'\nimport {\n  Layout,\n  SideNav\n} from 'mdx-docs'\n\nconst routes = [\n  { name: 'Home', path: '/' },\n  { name: 'Getting Started', path: '/getting-started' },\n  { name: 'API', path: '/api' },\n]\n\nexport default class MyApp extends App {\n  static async getInitialProps ({ Component, router, ctx }) {\n    let page = {}\n    if (Component.getInitialProps) {\n      page = await Component.getInitialProps(ctx)\n    }\n    return { page }\n  }\n\n  render () {\n    const { Component, page } = this.props\n\n    return (\n      <Container>\n        <Layout\n          {...this.props}\n          routes={routes}\n          sidebar={(\n            <SideNav />\n          )}>\n          <Component {...page} />\n        </Layout>\n      </Container>\n    )\n  }\n}\n")),o.a.createElement(p.MDXTag,{name:"h2",components:n,props:{id:"customize"}},"Customize"),o.a.createElement(p.MDXTag,{name:"p",components:n},"Use a custom theme or configure the MDX Docs components to change the look and feel of your site."),o.a.createElement(p.MDXTag,{name:"ul",components:n},o.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"theming.md"}},"Theming")),o.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"components.md"}},"Components"))))}}},[314]).default}});