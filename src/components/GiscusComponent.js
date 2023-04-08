import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus    
      repo="Jaaayden/discussion.Jaaayden.github.io"
      repoId="R_kgDOJT9xrQ"
      category="General"
      categoryId="DIC_kwDOJT9xrc4CVnZV"  // E.g. id of "General"
      mapping="title"                        // Important! To map comments to URL
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="en"
      // loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}
{/* <script src="https://giscus.app/client.js"
        data-repo="Jaaayden/discussion.Jaaayden.github.io"
        data-repo-id="R_kgDOJT9xrQ"
        data-category="General"
        data-category-id="DIC_kwDOJT9xrc4CVnZV"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="light"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script> */}