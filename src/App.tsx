import { WysiwygEditor } from '@remirror/react-editors/wysiwyg';

const App: React.FC = () => {
  return (
    <div style={{ padding: 16 }}>
      <WysiwygEditor placeholder='Enter text...' />
    </div>
  );
};

export default App;
