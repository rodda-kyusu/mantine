export const light = {
  name: 'Monokai Light Theme',
  colors: {
    'editor.background': '#fafafa',
    'editor.lineHighlightBackground': '#e6e3c3',
    'editor.selectionBackground': '#ccc9ad',
    'editorCursor.foreground': '#666663',
    'editorIndentGuide.background': '#D3D4D5',
    'editorLineNumber.foreground': '#a2a19c',
    'editorWhitespace.foreground': '#bbbbb7',
  },
  tokenColors: [
    {
      settings: {
        background: '#fafafa',
        foreground: '#49483e',
        caret: '#666663',
        invisibles: '#49483E',
        lineHighlight: '#e6e3c3',
        selection: '#ccc9ad',
      },
    },
    {
      name: 'Comments',
      scope: 'comment',
      settings: {
        foreground: '#868E96',
      },
    },
    {
      name: 'Strings',
      scope: 'string',
      settings: {
        foreground: '#1C7ED6',
      },
    },
    {
      name: 'Numbers',
      scope: 'constant.numeric',
      settings: {
        foreground: '#6741D9',
      },
    },
    {
      name: 'Built-in constants',
      scope: 'constant.language',
      settings: {
        foreground: '#6741D9',
      },
    },
    {
      name: 'User-defined constants',
      scope: ['constant.character', 'constant.other'],
      settings: {
        foreground: '#6741D9',
      },
    },
    {
      name: 'Variables',
      scope: 'variable',
      settings: {
        fontStyle: '',
        foreground: '#49483e',
      },
    },
    {
      name: 'Keywords',
      scope: 'keyword',
      settings: {
        foreground: '#E03131',
      },
    },
    {
      name: 'Storage',
      scope: 'storage',
      settings: {
        fontStyle: '',
        foreground: '#E03131',
      },
    },
    {
      name: 'Storage types',
      scope: 'storage.type',
      settings: {
        foreground: '#1098AD',
      },
    },
    {
      name: 'Class names',
      scope: ['entity.name.class', 'entity.name.type'],
      settings: {
        foreground: '#5C940D',
      },
    },
    {
      name: 'Inherited class',
      scope: 'entity.other.inherited-class',
      settings: {
        foreground: '#5C940D',
      },
    },
    {
      name: 'Function names',
      scope: 'entity.name.function',
      settings: {
        fontStyle: '',
        foreground: '#5C940D',
      },
    },
    {
      name: 'Function arguments',
      scope: 'variable.parameter',
      settings: {
        fontStyle: '',
        foreground: '#E67700',
      },
    },
    {
      name: 'Tag names',
      scope: 'entity.name.tag',
      settings: {
        fontStyle: '',
        foreground: '#E03131',
      },
    },
    {
      name: 'Tag attributes',
      scope: 'entity.other.attribute-name',
      settings: {
        fontStyle: '',
        foreground: '#5C940D',
      },
    },
    {
      name: 'Library functions',
      scope: 'support.function',
      settings: {
        fontStyle: '',
        foreground: '#1098AD',
      },
    },
    {
      name: 'Library constants',
      scope: 'support.constant',
      settings: {
        fontStyle: '',
        foreground: '#1098AD',
      },
    },
    {
      name: 'Library classes/types',
      scope: ['support.type', 'support.class'],
      settings: {
        foreground: '#1098AD',
      },
    },
    {
      name: 'Library variable',
      scope: 'support.other.variable',
      settings: {
        fontStyle: '',
        foreground: '#49483e',
      },
    },
    {
      name: 'Invalid',
      scope: 'invalid',
      settings: {
        background: '#F92672',
        foreground: '#F8F8F0',
      },
    },
    {
      name: 'Invalid deprecated',
      scope: 'invalid.deprecated',
      settings: {
        background: '#AE81FF',
        foreground: '#F8F8F0',
      },
    },
    {
      name: 'diff: header',
      scope: ['meta.diff', 'meta.diff.header'],
      settings: {
        foreground: '#E0EDDD',
      },
    },
    {
      name: 'diff: deleted',
      scope: 'markup.deleted',
      settings: {
        foreground: '#dc322f',
      },
    },
    {
      name: 'diff: changed',
      scope: 'markup.changed',
      settings: {
        foreground: '#cb4b16',
      },
    },
    {
      name: 'diff: inserted',
      scope: 'markup.inserted',
      settings: {
        foreground: '#219186',
      },
    },
    {
      name: 'Markup Quote',
      scope: 'markup.quote',
      settings: {
        foreground: '#22aa44',
      },
    },
    {
      name: 'Markup Styling',
      scope: ['markup.bold', 'markup.italic'],
      settings: {
        foreground: '#22aa44',
      },
    },
    {
      name: 'Markup Inline',
      scope: 'markup.inline.raw',
      settings: {
        foreground: '#9966b8',
      },
    },
    {
      name: 'Markup Headings',
      scope: 'markup.heading',
      settings: {
        foreground: '#E67700',
      },
    },
    {
      name: 'Markup Setext Header',
      scope: 'markup.heading.setext',
      settings: {
        foreground: '#ddbb88',
      },
    },
  ],
};

export const dark = {
  type: 'dark',
  colors: {
    'dropdown.background': '#525252',
    'list.activeSelectionBackground': '#707070',
    'quickInputList.focusBackground': '#707070',
    'list.inactiveSelectionBackground': '#4e4e4e',
    'list.hoverBackground': '#444444',
    'list.highlightForeground': '#e58520',
    'button.background': '#565656',
    'editor.background': '#1e1e1e',
    'editor.foreground': '#c5c8c6',
    'editor.selectionBackground': '#676b7180',
    'minimap.selectionHighlight': '#676b7180',
    'editor.selectionHighlightBackground': '#575b6180',
    'editor.lineHighlightBackground': '#303030',
    'editorLineNumber.activeForeground': '#949494',
    'editor.wordHighlightBackground': '#4747a180',
    'editor.wordHighlightStrongBackground': '#6767ce80',
    'editorCursor.foreground': '#c07020',
    'editorWhitespace.foreground': '#505037',
    'editorIndentGuide.background': '#505037',
    'editorIndentGuide.activeBackground': '#707057',
    'editorGroupHeader.tabsBackground': '#282828',
    'tab.inactiveBackground': '#404040',
    'tab.border': '#303030',
    'tab.inactiveForeground': '#d8d8d8',
    'tab.lastPinnedBorder': '#505050',
    'peekView.border': '#3655b5',
    'panelTitle.activeForeground': '#ffffff',
    'statusBar.background': '#505050',
    'statusBar.debuggingBackground': '#505050',
    'statusBar.noFolderBackground': '#505050',
    'titleBar.activeBackground': '#505050',
    'statusBarItem.remoteBackground': '#3655b5',
    'ports.iconRunningProcessForeground': '#CCCCCC',
    'activityBar.background': '#353535',
    'activityBar.foreground': '#ffffff',
    'activityBarBadge.background': '#3655b5',
    'sideBar.background': '#272727',
    'sideBarSectionHeader.background': '#505050',
    'menu.background': '#272727',
    'menu.foreground': '#CCCCCC',
    'pickerGroup.foreground': '#b0b0b0',
    'inputOption.activeBorder': '#3655b5',
    focusBorder: '#3655b5',
    'terminal.ansiBlack': '#1e1e1e',
    'terminal.ansiRed': '#C4265E',
    'terminal.ansiGreen': '#86B42B',
    'terminal.ansiYellow': '#B3B42B',
    'terminal.ansiBlue': '#6A7EC8',
    'terminal.ansiMagenta': '#8C6BC8',
    'terminal.ansiCyan': '#56ADBC',
    'terminal.ansiWhite': '#e3e3dd',
    'terminal.ansiBrightBlack': '#666666',
    'terminal.ansiBrightRed': '#f92672',
    'terminal.ansiBrightGreen': '#A6E22E',
    'terminal.ansiBrightYellow': '#e2e22e',
    'terminal.ansiBrightBlue': '#819aff',
    'terminal.ansiBrightMagenta': '#AE81FF',
    'terminal.ansiBrightCyan': '#66D9EF',
    'terminal.ansiBrightWhite': '#f8f8f2',
    'terminal.inactiveSelectionBackground': '#676b7140',
  },
  tokenColors: [
    {
      settings: {
        foreground: '#C5C8C6',
      },
    },
    {
      scope: ['meta.embedded', 'source.groovy.embedded', 'variable.legacy.builtin.python'],
      settings: {
        foreground: '#C5C8C6',
      },
    },
    {
      name: 'Comment',
      scope: 'comment',
      settings: {
        fontStyle: '',
        foreground: '#9A9B99',
      },
    },
    {
      name: 'String',
      scope: 'string',
      settings: {
        fontStyle: '',
        foreground: '#9AA83A',
      },
    },
    {
      name: 'String Embedded Source',
      scope: 'string source',
      settings: {
        fontStyle: '',
        foreground: '#D08442',
      },
    },
    {
      name: 'Number',
      scope: 'constant.numeric',
      settings: {
        fontStyle: '',
        foreground: '#6089B4',
      },
    },
    {
      name: 'Built-in constant',
      scope: 'constant.language',
      settings: {
        fontStyle: '',
        foreground: '#408080',
      },
    },
    {
      name: 'User-defined constant',
      scope: 'constant.character, constant.other',
      settings: {
        fontStyle: '',
        foreground: '#8080FF',
      },
    },
    {
      name: 'Keyword',
      scope: 'keyword',
      settings: {
        fontStyle: '',
        foreground: '#6089B4',
      },
    },
    {
      name: 'Support',
      scope: 'support',
      settings: {
        fontStyle: '',
        foreground: '#C7444A',
      },
    },
    {
      name: 'Storage',
      scope: 'storage',
      settings: {
        fontStyle: '',
        foreground: '#9872A2',
      },
    },
    {
      name: 'Class name',
      scope:
        'entity.name.class, entity.name.type, entity.name.namespace, entity.name.scope-resolution',
      settings: {
        fontStyle: '',
        foreground: '#9B0000',
      },
    },
    {
      name: 'Inherited class',
      scope: 'entity.other.inherited-class',
      settings: {
        fontStyle: '',
        foreground: '#C7444A',
      },
    },
    {
      name: 'Function name',
      scope: 'entity.name.function',
      settings: {
        fontStyle: '',
        foreground: '#CE6700',
      },
    },
    {
      name: 'Function argument',
      scope: 'variable.parameter',
      settings: {
        fontStyle: '',
        foreground: '#6089B4',
      },
    },
    {
      name: 'Tag name',
      scope: 'entity.name.tag',
      settings: {
        fontStyle: '',
        foreground: '#9872A2',
      },
    },
    {
      name: 'Tag attribute',
      scope: 'entity.other.attribute-name',
      settings: {
        fontStyle: '',
        foreground: '#9872A2',
      },
    },
    {
      name: 'Library function',
      scope: 'support.function',
      settings: {
        fontStyle: '',
        foreground: '#9872A2',
      },
    },
    {
      name: 'Keyword',
      scope: 'keyword',
      settings: {
        fontStyle: '',
        foreground: '#676867',
      },
    },
    {
      name: 'Class Variable',
      scope: 'variable.other, variable.js, punctuation.separator.variable',
      settings: {
        fontStyle: '',
        foreground: '#6089B4',
      },
    },
    {
      name: 'Meta Brace',
      scope:
        'punctuation.section.embedded -(source string source punctuation.section.embedded), meta.brace.erb.html',
      settings: {
        fontStyle: '',
        foreground: '#008200',
      },
    },
    {
      name: 'Invalid',
      scope: 'invalid',
      settings: {
        fontStyle: '',
        foreground: '#FF0B00',
      },
    },
    {
      name: 'Normal Variable',
      scope: 'variable.other.php, variable.other.normal',
      settings: {
        fontStyle: '',
        foreground: '#6089B4',
      },
    },
    {
      name: 'Function Object',
      scope: 'meta.function-call.object',
      settings: {
        fontStyle: '',
        foreground: '#9872A2',
      },
    },
    {
      name: 'Function Call Variable',
      scope: 'variable.other.property',
      settings: {
        fontStyle: '',
        foreground: '#9872A2',
      },
    },
    {
      name: 'Keyword Control / Special',
      scope: [
        'keyword.control',
        'keyword.operator.new.cpp',
        'keyword.operator.delete.cpp',
        'keyword.other.using',
        'keyword.other.directive.using',
        'keyword.other.operator',
      ],
      settings: {
        fontStyle: '',
        foreground: '#9872A2',
      },
    },
    {
      name: 'Tag',
      scope: 'meta.tag',
      settings: {
        fontStyle: '',
        foreground: '#D0B344',
      },
    },
    {
      name: 'Tag Name',
      scope: 'entity.name.tag',
      settings: {
        fontStyle: '',
        foreground: '#6089B4',
      },
    },
    {
      name: 'Doctype',
      scope: 'meta.doctype, meta.tag.sgml-declaration.doctype, meta.tag.sgml.doctype',
      settings: {
        fontStyle: '',
        foreground: '#9AA83A',
      },
    },
    {
      name: 'Tag Inline Source',
      scope: 'meta.tag.inline source, text.html.php.source',
      settings: {
        fontStyle: '',
        foreground: '#9AA83A',
      },
    },
    {
      name: 'Tag Other',
      scope:
        'meta.tag.other, entity.name.tag.style, entity.name.tag.script, meta.tag.block.script, source.js.embedded punctuation.definition.tag.html, source.css.embedded punctuation.definition.tag.html',
      settings: {
        fontStyle: '',
        foreground: '#9872A2',
      },
    },
    {
      name: 'Tag Attribute',
      scope: 'entity.other.attribute-name, meta.tag punctuation.definition.string',
      settings: {
        fontStyle: '',
        foreground: '#D0B344',
      },
    },
    {
      name: 'Tag Value',
      scope: 'meta.tag string -source -punctuation, text source text meta.tag string -punctuation',
      settings: {
        fontStyle: '',
        foreground: '#6089B4',
      },
    },
    {
      name: 'Meta Brace',
      scope:
        'punctuation.section.embedded -(source string source punctuation.section.embedded), meta.brace.erb.html',
      settings: {
        fontStyle: '',
        foreground: '#D0B344',
      },
    },
    {
      name: 'HTML ID',
      scope: 'meta.toc-list.id',
      settings: {
        foreground: '#9AA83A',
      },
    },
    {
      name: 'HTML String',
      scope:
        'string.quoted.double.html, punctuation.definition.string.begin.html, punctuation.definition.string.end.html, punctuation.definition.string.end.html source, string.quoted.double.html source',
      settings: {
        fontStyle: '',
        foreground: '#9AA83A',
      },
    },
    {
      name: 'HTML Tags',
      scope:
        'punctuation.definition.tag.html, punctuation.definition.tag.begin, punctuation.definition.tag.end',
      settings: {
        fontStyle: '',
        foreground: '#6089B4',
      },
    },
    {
      name: 'CSS ID',
      scope: 'meta.selector.css entity.other.attribute-name.id',
      settings: {
        fontStyle: '',
        foreground: '#9872A2',
      },
    },
    {
      name: 'CSS Property Name',
      scope: 'support.type.property-name.css',
      settings: {
        fontStyle: '',
        foreground: '#676867',
      },
    },
    {
      name: 'CSS Property Value',
      scope:
        'meta.property-group support.constant.property-value.css, meta.property-value support.constant.property-value.css',
      settings: {
        fontStyle: '',
        foreground: '#C7444A',
      },
    },
    {
      name: 'JavaScript Variable',
      scope: 'variable.language.js',
      settings: {
        foreground: '#CC555A',
      },
    },
    {
      name: 'Template Definition',
      scope: ['punctuation.definition.template-expression', 'punctuation.section.embedded.coffee'],
      settings: {
        foreground: '#D08442',
      },
    },
    {
      name: 'Reset JavaScript string interpolation expression',
      scope: ['meta.template.expression'],
      settings: {
        foreground: '#C5C8C6',
      },
    },
    {
      name: 'PHP Function Call',
      scope: 'meta.function-call.object.php',
      settings: {
        fontStyle: '',
        foreground: '#D0B344',
      },
    },
    {
      name: 'PHP Single Quote HMTL Fix',
      scope: 'punctuation.definition.string.end.php, punctuation.definition.string.begin.php',
      settings: {
        foreground: '#9AA83A',
      },
    },
    {
      name: 'PHP Parenthesis HMTL Fix',
      scope: 'source.php.embedded.line.html',
      settings: {
        foreground: '#676867',
      },
    },
    {
      name: 'PHP Punctuation Embedded',
      scope: 'punctuation.section.embedded.begin.php, punctuation.section.embedded.end.php',
      settings: {
        fontStyle: '',
        foreground: '#D08442',
      },
    },
    {
      name: 'Ruby Symbol',
      scope: 'constant.other.symbol.ruby',
      settings: {
        fontStyle: '',
        foreground: '#9AA83A',
      },
    },
    {
      name: 'Ruby Variable',
      scope: 'variable.language.ruby',
      settings: {
        fontStyle: '',
        foreground: '#D0B344',
      },
    },
    {
      name: 'Ruby Special Method',
      scope: 'keyword.other.special-method.ruby',
      settings: {
        fontStyle: '',
        foreground: '#D9B700',
      },
    },
    {
      name: 'Ruby Embedded Source',
      scope: ['punctuation.section.embedded.begin.ruby', 'punctuation.section.embedded.end.ruby'],
      settings: {
        foreground: '#D08442',
      },
    },
    {
      name: 'SQL',
      scope: 'keyword.other.DML.sql',
      settings: {
        fontStyle: '',
        foreground: '#D0B344',
      },
    },
    {
      name: 'diff: header',
      scope: 'meta.diff, meta.diff.header',
      settings: {
        fontStyle: 'italic',
        foreground: '#E0EDDD',
      },
    },
    {
      name: 'diff: deleted',
      scope: 'markup.deleted',
      settings: {
        fontStyle: '',
        foreground: '#dc322f',
      },
    },
    {
      name: 'diff: changed',
      scope: 'markup.changed',
      settings: {
        fontStyle: '',
        foreground: '#cb4b16',
      },
    },
    {
      name: 'diff: inserted',
      scope: 'markup.inserted',
      settings: {
        foreground: '#219186',
      },
    },
    {
      name: 'Markup Quote',
      scope: 'markup.quote',
      settings: {
        foreground: '#9872A2',
      },
    },
    {
      name: 'Markup Lists',
      scope: 'markup.list',
      settings: {
        foreground: '#9AA83A',
      },
    },
    {
      name: 'Markup Styling',
      scope: 'markup.bold, markup.italic',
      settings: {
        foreground: '#6089B4',
      },
    },
    {
      name: 'Markup Inline',
      scope: 'markup.inline.raw',
      settings: {
        fontStyle: '',
        foreground: '#FF0080',
      },
    },
    {
      name: 'Markup Headings',
      scope: 'markup.heading',
      settings: {
        foreground: '#D0B344',
      },
    },
    {
      name: 'Markup Setext Header',
      scope: 'markup.heading.setext',
      settings: {
        fontStyle: '',
        foreground: '#D0B344',
      },
    },
    {
      name: 'Markdown Headings',
      scope: 'markup.heading.markdown',
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown Quote',
      scope: 'markup.quote.markdown',
      settings: {
        fontStyle: 'italic',
        foreground: '',
      },
    },
    {
      name: 'Markdown Bold',
      scope: 'markup.bold.markdown',
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown Link Title/Description',
      scope: 'string.other.link.title.markdown,string.other.link.description.markdown',
      settings: {
        foreground: '#AE81FF',
      },
    },
    {
      name: 'Markdown Underline Link/Image',
      scope: 'markup.underline.link.markdown,markup.underline.link.image.markdown',
      settings: {
        foreground: '',
      },
    },
    {
      name: 'Markdown Emphasis',
      scope: 'markup.italic.markdown',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: 'markup.strikethrough',
      settings: {
        fontStyle: 'strikethrough',
      },
    },
    {
      name: 'Markdown Punctuation Definition Link',
      scope: 'markup.list.unnumbered.markdown, markup.list.numbered.markdown',
      settings: {
        foreground: '',
      },
    },
    {
      name: 'Markdown List Punctuation',
      scope: ['punctuation.definition.list.begin.markdown'],
      settings: {
        foreground: '',
      },
    },
    {
      scope: 'token.info-token',
      settings: {
        foreground: '#6796e6',
      },
    },
    {
      scope: 'token.warn-token',
      settings: {
        foreground: '#cd9731',
      },
    },
    {
      scope: 'token.error-token',
      settings: {
        foreground: '#f44747',
      },
    },
    {
      scope: 'token.debug-token',
      settings: {
        foreground: '#b267e6',
      },
    },
    {
      name: 'this.self',
      scope: 'variable.language',
      settings: {
        foreground: '#c7444a',
      },
    },
  ],
  semanticHighlighting: true,
};
