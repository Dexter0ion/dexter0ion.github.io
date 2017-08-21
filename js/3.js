function change_bg(obj)
{
    var a=document.getElementById("nav").getElementsByTagName("a");
    for(var i=0;i<a.length;i++)
    {
        a[i].className="";
    }
    obj.className="current";
}
function put()
{
	var b=document.getElementById("one");
	b.style.backgroundColor="orange";
	b.style.color="white";
}
function out()
{
	var c=document.getElementById("one");
	c.style.backgroundColor="white";
	c.style.color="black";
}
function color()
{
	var b=document.getElementById("two");
	b.style.backgroundColor="orange";
	b.style.color="white";
}
function colo()
{
	var c=document.getElementById("two");
	c.style.backgroundColor="white";
	c.style.color="black";
}
function pu()
{
	var b=document.getElementById("three");
	b.style.backgroundColor="orange";
	b.style.color="white";
}
function ou()
{
	var c=document.getElementById("three");
	c.style.backgroundColor="white";
	c.style.color="black";
}
