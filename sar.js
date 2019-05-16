var submit = function()
{
	s=document.getElementById("input").value;
	s=s.toUpperCase();
	out1="";
	out2="";
	var a=0;

	var smallchar=["aãåāàáâäąă","bƄ","cçĉ¢ċč","dďđḍ","eēêĕëėęèé","fƒ","gġĝğ","hĥħ","i!ìïĭįīîí","jĵ","ķk","l","m","nñṅń","oõōøòöôó","p","qǫ","rṛŕŗř","s$śṣšş","tṭţŧ","uūüũùûúůű","v","wŵω","x×","y¥ýÿŷ","zƶžźžż"];
	var bigchar=["AÃÅĀÀÁÂÄĂĄ","BẞƁɃ","CĆĈČÇĊÇ","DĎḌÐ","EƎĒÊĔËÈĘĖÉ£Ʃ","ƑF","GĠĜĢĞ","HĤ","IÌÏĪĬÎÍ","JĴ","KĶ","LŁĿĽ","M","NÑŊŃƝ","OÕŌØÒÖÔΘÓ0","PƤ","QǬǪ","RṚŔŖŘ","S$ŚṢŠŞ","TṬŤŦͲ","UŪŨÜŮŰÙÛÚ","V","WŴƜ","X","YÝŶŸ","ZƵŽŻŽŹ"];

	for(var i=0;i<s.length;i++)
	{
		if(s[i]>='A' && s[i]<='Z')
		{
			if(a%2==0)
			{
				out1=out1+s[i].toLowerCase();
			}
			else
			{
				out1=out1+s[i];
			}
			a++;
		}
		else
		{
			out1=out1+s[i];
			if(s[i]==" ")
			{
				a=0;
			}
		}
	}

	a=0;
	for(var i=0;i<s.length;i++)
	{
		if(s[i]>='A' && s[i]<='Z')
		{
			var no = s.charCodeAt(i)-65;
			if(a%2==0)
			{
				var num = Math.floor(Math.random() * smallchar[no].length);
				out2=out2+smallchar[no][num];
			}
			else
			{
				var num = Math.floor(Math.random() * bigchar[no].length);
				out2=out2+bigchar[no][num];
			}
			a++;
		}
		else
		{
			out2=out2+s[i];
			if(s[i]==' ')
			{
				a=0;
			}
		}
	}

	document.getElementById("output1").innerText=out1;
	document.getElementById("output2").innerText=out2;
}