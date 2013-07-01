function g(o){
	return document.getElementById(o);
}
function HoverLi1(m,n,counter){
	for(var i=1;i<=counter;i++){
		g('tb_'+m+i).className='currenttab';
		g('tbc_'+m+i).className='undis';
	}
	g('tbc_'+m+n).className='dis';
	g('tb_'+m+n).className='hovertab';
}

function HoverLi(m,n,counter){
	for(var i=1;i<=counter;i++){
		g('reg_tb_'+m+i).className='reg_currenttab';
		g('tbc_'+m+i).className='undis';
	}
	g('tbc_'+m+n).className='dis';
	g('reg_tb_'+m+n).className='reg_hovertab';
	
	if(n==2)
	{
		g('reg_tb_12').className='reg_hovertab';	
	}
	else{
		g('reg_tb_12').className='reg_currenttab1';	
	}
}