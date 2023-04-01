1. 实验部分
	1. 阳性对照和阴性对照都要，3 个重复，取平均值
	2. 蛋白中加入 0.1% 的 BSA 和 Triton
	3. 药物浓度梯度稀释
	4. 先加蛋白，再加药物，孵育 90s 后加入底物，检测荧光。
	5. 导出数据前取点需要计算斜率
2. Microsoft Excel：
	1. 直接用设备导出的斜率（或者用 signal 自己计算斜率）
	2. 计算抑制率：$$抑制率=\frac{(calResult-nagetive\_average)}{(positive\_average/nagetive\_average)}$$
	3. ~~根据斜率计算 IC50：$IC50=1-\frac{测出来的强度}{没有抑制时的强度}$~~
4. 软件 Prism
	1. 创建一个 XY 轴，选择好 Y 列的数量。
	2. 将数据复制进去
	3. 分析选择 Nonlinear regression (curve fit)，\[inhibitor\] vs. response Variable slope (four parameters)。
	4. X 轴调节 Format 为 power of 10:![[00-Inbox/Attachment/Pasted image 20221127142550.png]]
	5. Y 轴调整合适的 Range、Magor ticks interval ：![[00-Inbox/Attachment/Pasted image 20221127142609.png]]
	6. 忽略掉比较离散的点，即可查看 IC50。