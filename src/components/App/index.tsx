import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { PaperScope, Path, Color, Point, Tool, ToolEvent } from 'paper';
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

    // const circle = new Path.Circle(new Point([150, 150]), 50);
    // const color = new Color(255, 0, 0);
    // circle.fillColor = color;
    // circle.selected = true;

    // console.log('circle seg ', circle.segments);
    // const seg = circle.segments[2];
    // seg.selected = true;

    // const tool = new Tool();
    // tool.onMouseDown = (e: ToolEvent) => {
    //   console.log('mouse down ', e);
    //   seg.point = seg.point.add(e.delta);
    // };
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
