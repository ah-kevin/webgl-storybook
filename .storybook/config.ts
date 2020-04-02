import { addParameters, configure } from "@storybook/react";
import '!style-loader!css-loader!less-loader!./main.less';

addParameters({
    options: {
        isFullscreen: false,
        showAddonsPanel: true,
        showSearchBox: false,
        panelPosition: 'bottom',
        enableShortcuts: true,
    }
});
//自动导入所有以* .stories.tsx结尾的文件
const req = require.context('../stories', true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);
