- 20221124：[[04-研究生/04-实验记录/20221124 实验记录]]
- 实验部分：
	- 50uL 的体系，其中 2.5uL 的底物，47.5uL 的蛋白
	- 确定好终浓度，开始配溶液
		- 配蛋白用的 Mpro Assay buffer：50mM Tris ，1mM EDTA，pH7.3
	- 其中，蛋白溶液中还含有千分之一的 BSA
	- 蛋白的终浓度是 0.1uM，底物的终浓度是 5-100uM。
	- 注意，加入底物后需要混合，但是在混合前必须先吸 5uL 防止有气泡
	- 其中一次是测反应中的荧光强度，还需要测一次反应完全之后的荧光强度，这一步的目的是为了计算标准曲线。
	- 导出数据：
		- 标准曲线的数据导出不需要计算斜率，直接导出信号强度即可
		- 反应的数据导出需要计算斜率
- 计算部分：
	- 首先是导出上面的数据，确定导出的单位是 s 还是 min==（20221125更新：找了下没找到，应该是 min）==
	- 在 Microsoft Excel 中计算，这里有两种计算方式：
		1. DYK 师兄：直接将荧光强度/标准曲线的斜率/60，然后将单位换算成 M 进行计算。
		2. ZXY 师兄：(荧光强度\*60-Y 轴截距)/斜率/60，然后将单位换算成 M 进行计算。
	- prism ：
		1. 计算标准曲线：Nonlinear regression (curve fit)——Standard curves to interpolate，得到斜率和截距
		2. Nonlinear regression (curve fit)——Kcat，Constrain 中 et 输入的是蛋白的浓度（由于已经把单位都换算成 M 了，所以这里的单位也是 M），在 output 中选择 Create summary table and graph。