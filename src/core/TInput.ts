/**
 * Created by lenovo on 2014/6/17.
 */

class TInput{
	mouseX:number = 0;
	mouseY:number = 0;
	mouseDown:boolean = false;
	keyCode:number = 0;
	keyDown:boolean = false;

	delegate:TInputDelegate;

	bindDelegate(delegate:TInputDelegate):void{
		this.delegate = delegate;
		this.delegate.input = this;
	}
}