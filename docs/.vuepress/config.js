module.exports = {
  title: '面试宝典',
  description: '把面试的知识点整合一遍',
  themeConfig: {
    nav: [],
    sidebar: [
      {
        title: 'css篇：',
        collapsable: false,
        children: [
          'css/',
          'css/bfc'
        ]
      },
      {
        title: 'js基础',
        collapsable: false,
        children: [
          'javascript/',
          'javascript/basicWriteExam',
          'javascript/algorithmExam'
        ]
      },
      {
        title: 'html篇',
        collapsable: false,
        children: [
          'html/'
        ]
      },
      {
        title: '前端构建工具',
        collapsable: false,
        children: [
          'buildTools/'
        ]
      },
      {
        title: 'tcp',
        collapsable: false,
        children: [
          'tcp/'
        ]
      }
    ]
  }
}