import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { PaperScope, Path, Color, Point, Tool, ToolEvent } from 'paper';
// import { PaperScope, Path, CompoundPath } from 'paper';
import * as Paper from 'paper';
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
  private paper: Paper.PaperScope;
  
  constructor(props: IProps) {
    super(props);
    
    this.canvasRef = React.createRef();
    this.paper = new Paper.PaperScope();
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

    // const topLeft = [180, 180];
    // const bottomRight = [280, 280];
    // const rect = new Path.Rectangle({
    //   topLeft,
    //   bottomRight,
    //   // Fill the path with a gradient of three color stops
    //   // that runs between the two points we defined earlier:
    //   fillColor: {
    //       gradient: {
    //           // stops: ['yellow', 'red', 'blue']
    //           stops: [['white', 0.1], ['black', 0.5], ['white', 1]],
    //           // radial: true
    //       },
    //       origin: topLeft,
    //       destination: bottomRight
    //   }
    // });
    // console.log(rect);

    const circle = new Paper.Path.Circle({
      center: [300, 300],
      radius: 50,
      fillColor: {
        gradient: {
            stops: [['white', 0.1], ['black', 0.5], ['white', 1]],
            radial: true
        },
        origin: [300, 300],
        destination: [330, 330]
      },
      shadowColor: new Paper.Color(0, 0, 0),
      shadowBlur: 2,
      // Offset the shadow by { x: 5, y: 5 }
      shadowOffset: new Paper.Point(5, 5),
    });
  
    console.log(circle);

    // const startY = 18;
    // const endY = startY + 20;
    const p = new Paper.Path({
      // segments: [[21, startY], [243, startY], [429, startY], [596, startY], [666, startY], 
      //            [666, endY], [596, endY], [429, endY], [243, endY], [21, endY]],
      // segments: [[100, 50], [200, 50], [200, 200], [180, 200], [180, 70], [100, 70]],
      segments: [[100, 50], [180, 50], [200, 50], [180, 70], [100, 70]],
      fillRule: 'evenodd',
      fillColor: {
        gradient: {
          stops: [['black', 0.1], ['white', 0.5], ['black', 1]],
        },
        origin: [100, 50],
        destination: [100, 70]
      },
      strokeCap: 'square',
      // selected: true,
      // shadowColor: new Paper.Color(0, 0, 0),
      // shadowBlur: 2,
      // // Offset the shadow by { x: 5, y: 5 }
      // shadowOffset: new Paper.Point(5, 5),
      closed: true
    });
    // p.smooth({
    //   type: 'continuous',
    //   from: 1,
    //   to: 2,
    // });
    console.log(p);

    const p2 = new Paper.Path({
      // segments: [[21, startY], [243, startY], [429, startY], [596, startY], [666, startY], 
      //            [666, endY], [596, endY], [429, endY], [243, endY], [21, endY]],
      segments: [[200, 50], [200, 200], [180, 200], [180, 70], [200, 50]],
      fillRule: 'evenodd',
      fillColor: {
        gradient: {
          stops: [['black', 0.1], ['white', 0.5], ['black', 1]],
        },
        origin: [180, 200],
        destination: [200, 200]
      },
      strokeCap: 'square',
      // selected: true,
      // shadowColor: new Paper.Color(0, 0, 0),
      // shadowBlur: 2,
      // // Offset the shadow by { x: 5, y: 5 }
      // shadowOffset: new Paper.Point(5, 5),
      closed: true
    });
    console.log(p2);

    const p4 = new Paper.Path({
      // segments: [[700, 100], [725, 75], [750, 50], [750, 75], [750, 300], [700, 300]],
      segments: [[700, 100], [725, 75], [730, 55], [750, 75], [750, 300], [700, 300]],
      fillRule: 'evenodd',
      fillColor: {
        gradient: {
          stops: [['black', 0.1], ['white', 0.5], ['black', 1]],
        },
        origin: [750, 300],
        destination: [700, 300]
      },
      strokeCap: 'square',
      // selected: true,
      // shadowColor: new Paper.Color(0, 0, 0),
      // shadowBlur: 2,
      // // Offset the shadow by { x: 5, y: 5 }
      // shadowOffset: new Paper.Point(5, 5),
      closed: true
    });
    p4.smooth({
      type: 'catmull-rom',
      factor: 0.5,
      from: 1,
      to: 3,
    })
    console.log(p4);

    const p3 = new Paper.Path({
      // segments: [[500, 50], [725, 50], [750, 50], [725, 75], [700, 100], [500, 100]],
      segments: [[500, 50], [725, 50], [745, 70], [725, 75], [700, 100], [500, 100]],
      fillRule: 'evenodd',
      fillColor: {
        gradient: {
          stops: [['black', 0.1], ['white', 0.5], ['black', 1]],
        },
        origin: [500, 50],
        destination: [500, 100]
      },
      strokeCap: 'square',
      // selected: true,
      // shadowColor: new Paper.Color(0, 0, 0),
      // shadowBlur: 2,
      // // Offset the shadow by { x: 5, y: 5 }
      // shadowOffset: new Paper.Point(5, 5),
      closed: true
    });
    p3.smooth({
      type: 'catmull-rom',
      factor: 0.5,
      from: 1,
      to: 3,
    });
    console.log(p3);

    // const cp = new Paper.CompoundPath({
    //   children: [
    //     p4,
    //     p3,
    //   ],
    //   fillColor: 'black',
    //   selected: true
    // });
    // console.log(cp);
    

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
