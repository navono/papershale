import * as React from 'react';
import './App.scss';
import { PaperScope, Path, Point, Color } from 'paper';

class App extends React.Component {
  private canvasRef: React.RefObject<HTMLCanvasElement>;
  private paper: PaperScope;

  constructor(props: any) {
    super(props);
    
    this.canvasRef = React.createRef();
    this.paper = new PaperScope();
  }

  public componentDidMount() {
    this.paper.setup(this.canvasRef.current as HTMLCanvasElement);

    const circle = new Path.Circle(new Point([50, 50]), 50);
    const color = new Color(255, 0, 0);
    circle.fillColor = color;
  }

  public render() {
    return (
      <div className="App">
        <canvas id="canvas" ref={this.canvasRef} /> 
      </div>
    );
  }
}

export default App;
