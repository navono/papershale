import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PaperScope } from 'paper';
import './index.scss';
import * as actions from './actions';
import Toolbar from '../Toolbar';

const combinedActions = {
  ...actions
};

interface IProps {
  actionDispatcher: typeof combinedActions;
}

class App extends React.Component<IProps, any> {
  private canvasRef: React.RefObject<HTMLCanvasElement>;
  private paper: PaperScope;
  
  constructor(props: IProps) {
    super(props);
    
    this.canvasRef = React.createRef();
    this.paper = new PaperScope();
  }

  public componentDidMount() {
    this.paper.setup(this.canvasRef.current as HTMLCanvasElement);
    this.props.actionDispatcher.updatePaper(this.paper);
  }

  public render() {
    return (
      <div className="App" >
        <div className="toolbar">
          <Toolbar />
        </div>
        <canvas className="paintingArea" ref={this.canvasRef} />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    actionDispatcher: bindActionCreators(combinedActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
