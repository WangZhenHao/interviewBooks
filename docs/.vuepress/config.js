module.exports = {
  dest: 'dist',
  base: '/interviewBooks/',
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
          'css/bfc',
          'css/css3',
          'css/compatible'
        ]
      },
      {
        title: 'js基础',
        collapsable: false,
        children: [
          'javascript/',
          'javascript/basicWriteExam',
          'javascript/algorithmExam',
          'javascript/es6',
          'javascript/typeScript'
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
          'buildTools/',
          'buildTools/git'
        ]
      },
      {
        title: '框架相关提问',
        collapsable: false,
        children: [
          'frame/',
          'frame/vue'
        ]
      },
      {
        title: 'tcp',
        collapsable: false,
        children: [
          'tcp/',
          'tcp/proxy',
          'tcp/security',
          'tcp/http',
          
        ]
      },
      {
        title: '面试记录',
        collapsable: false,
        children: [
          'data/eventLoop'
        ]
      }
    ]
  }
}