## 概述

- 使用 λDNA、质粒等简单模板，Phanta Max 可以有效扩增长达 40 kb 的片段
- 使用基因组 DNA 等复杂模板，Phanta Max 可以扩增长达 20 kb 的片段；
- 使用 cDNA 模板，Phanta Max 可以有效扩增长达 10 kb 的片段。
- 添加了在常温下能够抑制其 5'→3' 聚合酶活性和3'→5' 外切酶活性的两种单克隆抗体，可进行高特异性的热启动 PCR。
- 扩增产物为平端

## 注意

1. 只能扩增 DNA
2. 50 μl 体系内酶量建议不要超过 2U
3. 如扩增产物 需要进行TA克隆，加A之前必须进行DNA纯化
>**TA克隆**（TA cloning）是一种免用[限制酶](https://zh.wikipedia.org/wiki/%E9%99%90%E5%88%B6%E9%85%B6 "限制酶")的[亚克隆](https://zh.wikipedia.org/wiki/%E4%BA%9E%E5%85%8B%E9%9A%86 "亚克隆")手段，其操作不仅比传统的亚克隆简单，而且耗时也较短。TA克隆的关键在于载体和目的基因末端的[腺嘌呤](https://zh.wikipedia.org/wiki/%E8%85%BA%E5%98%8C%E5%91%A4 "腺嘌呤")（A）和[胸腺嘧啶](https://zh.wikipedia.org/wiki/%E8%83%B8%E8%85%BA%E5%98%A7%E5%95%B6 "胸腺嘧啶")（T）的互补配对。载体和目的基因进行上述配对之后，用[DNA连接酶](https://zh.wikipedia.org/wiki/DNA%E9%80%A3%E6%8E%A5%E9%85%B6 "DNA连接酶")即可实现它们之间的共价连接。
>如果因为没有合适的酶切位点而无法进行传统的亚克隆时，TA克隆就可以作为一种替代方案。
>TA克隆的主要缺陷在于目的基因有50%的概率以相反方向被植入载体中。
>TA克隆中的目的基因末端会多出一个腺嘌呤，而载体末端会多出一个胸腺嘧啶。
4. 在配制反应体系时请最后加入聚合酶
5. 引物设计
	- 引物3端最后一个碱基最好为G或者C；
	- 引物3端最后8个碱基应避免出现连续错配；
	- 引物3端应避免出现发夹结构；
	- 正向引物和反向引物的Tm值相差不超过1°C为佳，Tm值调整至55~65°C为佳（引物Tm值推荐使用Primer Premier 5进行计算）；
	- 引物额外附加序列，即与模板非配对序列，不应参与引物Tm值计算；
	- 引物的GC含量控制在40%-60%之间；
	- 引物A、G、C、T整体分布要尽量均匀，避免使用GC或者AT含量高的区域；
	- 引物内部或者两条引物之间避免有5个碱基以上的互补序列，两条引物的3端避免有3个碱基以上的互补序列；
	- 引物设计完毕请使用NCBI BLAST功能检索引物特异性，以避免非特异性扩增产生。

## 实验流程

- 体系里
	- DNA 聚合酶
	- 模板 DNA
	- 上下游引物
	- dNTP
	- Buffer

- 变性 95°C
	- 打开 DNA 双螺旋链
- 退火 56～72°C
	- DNA 聚合酶结合到解开的双链上
- 延伸 73°C
	- 延伸

## 参考文献

[[04-研究生/06-实验方法、原理/其他参考文献/Phanta® Max Super-Fidelity DNA Polymerase.pdf]]