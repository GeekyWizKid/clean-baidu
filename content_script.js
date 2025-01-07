// 监听输入框的变化
function modifySearch() {
  // 获取搜索输入框
  const searchInput = document.querySelector('#kw');
  if (!searchInput) return;

  // 监听表单提交
  const form = document.querySelector('#form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let searchText = searchInput.value.trim();
      
      // 如果搜索词末尾还没有 -李彦宏，则添加
      if (!searchText.endsWith(' -李彦宏')) {
        searchText += ' -李彦宏';
        searchInput.value = searchText;
      }
      
      form.submit();
    });
  }

  // 监听搜索按钮点击
  const searchButton = document.querySelector('#su');
  if (searchButton) {
    searchButton.addEventListener('click', () => {
      let searchText = searchInput.value.trim();
      if (!searchText.endsWith(' -李彦宏')) {
        searchText += ' -李彦宏';
        searchInput.value = searchText;
      }
    });
  }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', modifySearch);

// 处理动态加载的情况
const observer = new MutationObserver(() => {
  modifySearch();
});

// 观察整个文档变化
observer.observe(document.documentElement, {
  childList: true,
  subtree: true
}); 