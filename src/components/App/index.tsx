import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { PaperScope, Path, Color, Point, Tool, ToolEvent } from 'paper';
import { PaperScope, Path, Color } from 'paper';
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

    const topLeft = [80, 80];
    const bottomRight = [180, 180];
    const rect = new Path.Rectangle({
      topLeft,
      bottomRight,
      // Fill the path with a gradient of three color stops
      // that runs between the two points we defined earlier:
      fillColor: {
          gradient: {
              // stops: ['yellow', 'red', 'blue']
              stops: [['white', 0.1], ['black', 0.5], ['white', 1]],
              // radial: true
          },
          origin: topLeft,
          destination: bottomRight
      }
    });
    console.log(rect);

    const circle = new Path.Circle({
      center: [300, 300],
      radius: 50,
      fillColor: {
        gradient: {
            stops: [['white', 0.1], ['black', 0.5], ['white', 1]],
            radial: true
        },
        origin: [300, 300],
        destination: [330, 330]
      }
    });
  
    console.log(circle);

    const c = new Color(1, 0, 0);
    console.log(c);
    
    const startY = 18;
    const endY = startY + 20;
    const p = new Path({
      segments: [[21, startY], [243, startY], [429, startY], [596, startY], [666, startY], 
                 [666, endY], [596, endY], [429, endY], [243, endY], [21, endY]],
      fillColor: {
        gradient: {
          stops: [['black', 0.1], ['white', 0.5], ['black', 1]],
        },
        origin: [21, startY],
        destination: [21, endY]
      },
      strokeCap: 'square',
      // selected: true,
      closed: true
    });

    console.log(p);
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
