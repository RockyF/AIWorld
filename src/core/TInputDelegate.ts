/**
 * Created by lenovo on 2014/6/18.
 */

class TInputDelegate{
	input:TInput;

	setMousePosition(x:number, y:number):void{
		this.input.mouseX = x;
		this.input.mouseY = y;
	}

	setMouseDown(mouseDown:boolean):void{
		this.input.mouseDown = true;
	}

	setKeyCode(keyCode:number):void{
		this.input.keyCode = keyCode;
	}

	setKeyDown(keyDown:boolean):void{
		this.input.keyDown = keyDown;
	}
}