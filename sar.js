var submit = function()
{
	s=document.getElementById("input").value;
	s=s.toUpperCase();
	out="";
	var a=0;

	for(var i=0;i<s.length;i++)
	{
		if(s[i]!=' ')
		{
			if(a%2==0)
			{
				out=out+s[i].toLowerCase();
			}
			else
			{
				out=out+s[i];
			}
			a++;
		}
		else
		{
			out=out+s[i];
			a=0;
		}
	}

	document.getElementById("output").innerText=out;
}