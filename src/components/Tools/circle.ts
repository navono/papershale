import { Tool, ToolEvent, Shape, Point, Size } from 'paper';

export default class Circle {
  private tool: Tool;
  private shape: Shape;
  private mouseDownPoint: Point;

  constructor() {
    this.tool = new Tool();
    this.tool.onMouseDown = this.mouseDown;
    this.tool.onMouseDrag = this.mouseDrag;
    this.tool.onMouseUp = this.mouseUp;
  }

  public mouseDown = (e: ToolEvent) => {
    console.log('circle mousedown', e);
    
    // if(e.event.button > 0) {
    //   return;  // only first mouse button
    // }

    this.mouseDownPoint = e.downPoint;
      
    // this.shape = new Path.Ellipse({
    //   point: e.downPoint,
    //   size: 0
    // });
    this.shape = Shape.Ellipse({
      point: e.downPoint,
      size: 0,
    });

    // this.shape = pg.stylebar.applyActiveToolbarStyle(shape);
  };

  public mouseDrag = (e: ToolEvent) => {
    console.log('circle mouseDrag', e);
    // if(event.event.button > 0) return;  // only first mouse button
			
    const ex = e.point.x;
    const ey = e.point.y;
    
    if(e.modifiers.shift) {
      // this.shape.size = new Point(this.mouseDownPoint.x - ex, this.mouseDownPoint.x -ex);
      this.shape.size = new Size(this.mouseDownPoint.x - ex, this.mouseDownPoint.x - ex);
    } else {
      // this.shape.size = new Point(this.mouseDownPoint.x - ex, this.mouseDownPoint.y -ey);
      this.shape.size = new Size(this.mouseDownPoint.x - ex, this.mouseDownPoint.y - ey);
    }
    if(e.modifiers.alt) {
      this.shape.position = this.mouseDownPoint;
    } else {
      // this.shape.position = this.mouseDownPoint.subtract(this.shape.size * 0.5);
      this.shape.position = this.mouseDownPoint.subtract(new Point(this.shape.size.multiply(0.5)));
    }
  };

  public mouseUp = (e: ToolEvent) => {
    // if(event.event.button > 0) return;  // only first mouse button
			
    // convert shape to path
    this.shape.toPath(true);
    this.shape.remove();
    
    // pg.undo.snapshot('circle');
  };

  public activate = () => {
    if (this.tool) {
      this.tool.activate();
    }
  };

  public deactivate = () => {
    if (this.tool) {
      this.tool.remove();
    }
  };
}