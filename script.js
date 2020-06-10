function click(){
	var table=document.getElementById("tab")
	var name=document.getElementById("nume")
	var val=document.getElementById("valoare")
	console.log('clicked')
	var rowcount=table.rows.length
	var tr=table.insertRow(rowcount)
	table.appendChild(tr)
	tr.insertCell(name.value)
	tr.insertCell(val.value)

}