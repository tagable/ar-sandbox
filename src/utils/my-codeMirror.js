var React = require('react');
var Codemirror = require('../lib/CodeMirror');
const createReactClass = require('create-react-class');
const ReactMarkdown = require('react-markdown')

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');

require('../../node_modules/codemirror/lib/codemirror.css')
require('../../node_modules/codemirror/theme/duotone-dark.css')



let defaults = {
	markdown: '# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)',
	javascript: 'var component = {\n\tname: "react-codemirror",\n\tauthor: "Jed Watson",\n\trepo: "https://github.com/JedWatson/react-codemirror"\n};'
};

const MyCodeMirror = createReactClass({
	getInitialState () {
		return {
			code: '',
			mode: '',
			theme: 'duotone-dark'
		};
	},
	

	componentWillReceiveProps(nextProps){
		// console.log(nextProps, this.props);
		this.setState({
			code: nextProps.code,
			mode: nextProps.mode,
			theme: nextProps.theme
		});
		this.forceUpdate();
	},
	// updateCode (newCode) {
	// 	this.setState({
	// 		code: newCode
	// 	});
	// },

	render () {
		var options = {
			lineNumbers: true,
			mode: this.state.mode,
      theme: "duotone-dark",
      tabSize: 2
		};
		const val = this.state.code;
		// console.log("my-codeMirror", "("+val+")");

		return (
			<div>
				{val !== "" && <Codemirror
          className="code1"
          ref="editor"
          value={val}
          onChange={this.props.onChange}
          options={options}
          autoFocus={true} />}
				
			</div>
		);
	}
});

export default MyCodeMirror;
