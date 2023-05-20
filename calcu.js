let fnum, snum, sum, diff, pro, quo;
    document.getElementById("click").onclick = function() {
        fnum = parseInt(document.getElementById("firstnum").value);
        snum = parseInt(document.getElementById("secondnum").value);
        sum = fnum + snum;
        diff = fnum - snum;
        pro = fnum * snum;
        quo = fnum / snum;
 
        document.getElementById("addition").innerHTML = ' The sum of ' + fnum + ' and ' +snum + ' is: ' + sum;
        document.getElementById("subtraction").innerHTML = ' The difference of ' + fnum + ' and ' +snum + ' is: ' + diff;
        document.getElementById("multiplication").innerHTML = ' The product of ' + fnum + ' and ' +snum + ' is: ' + pro;
        document.getElementById("division").innerHTML = ' The quotient of ' + fnum + ' and ' + snum + ' is: ' + quo;
}