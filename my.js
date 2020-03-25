if (localStorage.getItem("pwd") === null) 
{
	var usr = ["admin"];
	var pwd = ["admin001"];
	var strData=["default"];
	var secPhr=["admin"];
	window.localStorage.setItem('usr', JSON.stringify(usr));
	window.localStorage.setItem('pwd', JSON.stringify(pwd));
	window.localStorage.setItem('imgData', JSON.stringify(strData));
	window.localStorage.setItem('sph', JSON.stringify(secPhr));
}

if(localStorage.getItem("sph") === null) 
{
	var secPhr=["admin"];
	window.localStorage.setItem('sph', JSON.stringify(secPhr));
}

if(localStorage.getItem("imgData") === null) 
{
	var strData=["default"];
	window.localStorage.setItem('imgData', JSON.stringify(strData));
}

	var i,flag=0,flag1=0,j,flag2=0;
	var u = window.localStorage.getItem('name');	
	var dataImage = localStorage.getItem('imgData1');	

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function validate()
{
	var x = document.getElementById("un").value;
	var y = document.getElementById("pwd").value;
	var usr = JSON.parse(window.localStorage.getItem('usr'));
	var pwd = JSON.parse(window.localStorage.getItem('pwd'));
	var strData = JSON.parse(window.localStorage.getItem('imgData'));
	flag=0;
	for(i=0;i<usr.length;i++)
	{
		if(x == usr[i] && y == pwd[i])
		{
			flag=1;
			u=x;
			if(strData[i]!=null && strData[i]!="data:,")
			{
				var z = strData[i];
			}
			else
			{
				var z = "default";
			}
			window.localStorage.setItem('name',u);
			window.localStorage.setItem('imgData1',z);
			alert("LOGIN SUCCESSFUL");
			window.open("html.html","_self");
			break;
		}
	}
	
	if(flag==0)
	{
		alert("INVALID CREDENTIALS. RETRY.");
	}

	document.getElementById("login").reset();
}

function forget_pass()
{
	alert("Forgot Password");
	window.open("forget.html","_self");
}

function readURL(input) 
{
    document.getElementById("dispimg").style.display = "block";
    document.getElementById("dispimg").hidden = "False";
    document.getElementById("usrimg").hidden = "True";

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('dispimg').src =  e.target.result;
	    document.getElementById('usrimg').src =  e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function readURL1(input) 
{
    document.getElementById("usrimg1").style.display = "block";
    document.getElementById("usrimg2").hidden = "True";

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
	    document.getElementById('usrimg1').src =  e.target.result;
	    document.getElementById('usrimg2').src =  e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function create_ac()
{
	var x = document.getElementById("un").value;
	var y = document.getElementById("pwd").value;
	var z = document.getElementById("sp").value;
	var usr = JSON.parse(window.localStorage.getItem('usr'));
	var pwd = JSON.parse(window.localStorage.getItem('pwd'));
	var strData = JSON.parse(window.localStorage.getItem('imgData'));
	var secPhr = JSON.parse(window.localStorage.getItem('sph'));
	flag=0;
	alert("Please Ensure You have entered the username and password above.");
	for(i=0;i<usr.length;i++)
	{
		if(x == usr[i])
		{
			alert("Username Already Exists. Try Again.");
			flag=1;
			break;
		}
	}
	
	if(flag==0)
	{
		usr[usr.length]=x;
		pwd[pwd.length]=y;
		secPhr[pwd.length-1]=z;
		window.localStorage.setItem('usr', JSON.stringify(usr));
		window.localStorage.setItem('pwd', JSON.stringify(pwd));
		window.localStorage.setItem('sph', JSON.stringify(secPhr));
		var bannerImage = document.getElementById('usrimg');
		var imgData = getBase64Image(bannerImage);
		strData[usr.length-1]=imgData;
		localStorage.setItem("imgData", JSON.stringify(strData));
		alert("Added Successfully");
		flag=0;
		window.open("login.html","_self");
	}
}

function k_p()
{	
	var z = document.getElementById("unf").value;
	var s = document.getElementById("scp").value;
	var usr = JSON.parse(window.localStorage.getItem('usr'));
	var pwd = JSON.parse(window.localStorage.getItem('pwd'));
	var secPhr = JSON.parse(window.localStorage.getItem('sph'));
	flag=0;
	alert("Please Ensure You have entered the registered username and your security Phrase.");
	for(i=0;i<usr.length;i++)
	{
		if(secPhr[i]==null)
		{
			secPhr[i] = "admin";
		}
		if(z == usr[i] && s==secPhr[i])
		{
			alert("Username Found.");
			flag=1;
			break;
		}
	}
	
	if(flag==0)
	{
		alert("Information not matched. Try Again.");
		document.getElementById("forget").reset();
	}
	else
	{
		var n_p= document.getElementById("np").value;
		pwd[i]=n_p;
		window.localStorage.setItem('pwd', JSON.stringify(pwd));
		alert("Password Changed Successfully.\nThank you. Kindly login to Continue.");
		window.open("login.html","_self");
	}
}



function logout()
{
	window.sessionStorage.removeItem('name');
	window.localStorage.removeItem('name');
	window.localStorage.removeItem('imgData1');
	window.open("login.html","_self");
}

function check_login()
{
	if(u!=null)
	{
		window.open("html.html","_self");
	}
}

function logged_name()
{
	document.getElementById("welcome").innerHTML = "Welcome " + u + " ";
	if(u==null)
	{
		document.getElementById("ht").innerHTML = "<span style='display:block; text-align:center; font-size: 50; color:blue;'>You are logged out. Login again to continue.</span>";
	}
	if(dataImage!="default")
	{
		var userImg = document.getElementById('fimg');
		userImg.src = "data:image/png;base64," + dataImage;
	}
}

function modify_p()
{
	var usr = JSON.parse(window.localStorage.getItem('usr'));
	var pwd = JSON.parse(window.localStorage.getItem('pwd'));
	var strData = JSON.parse(window.localStorage.getItem('imgData'));
	var secPhr = JSON.parse(window.localStorage.getItem('sph'));

	for(i=0;i<usr.length;i++)
	{
		if(u==usr[i])
		{
			break;
		}
	}

	var t=document.getElementById('unp').value;
	var v=document.getElementById('pwdp').value;
	var w=document.getElementById('spp').value;
		
	for(j=0;j<usr.length;j++)
	{
		if(t==usr[j] && t!=u)
		{
			flag2=1;
			break;
		}
	}
	
	if(flag2==0)
	{
		usr[i]=t;
		pwd[i]=v;
		secPhr[i]=w;
	
		window.localStorage.setItem('usr', JSON.stringify(usr));
		window.localStorage.setItem('pwd', JSON.stringify(pwd));
		window.localStorage.setItem('sph', JSON.stringify(secPhr));
		var bannerImage = document.getElementById('usrimg2');
		var imgData = getBase64Image(bannerImage);
		strData[i]=imgData;
		localStorage.setItem("imgData", JSON.stringify(strData));
		alert("Changes Saved Successfully.\nKindly login again.");
		logout();
	}
	else
	{
		alert("Username Already Exist.\n\nNo changes Saved.");
		window.open("modify.html","_self");
	}
}

function get_data()
{
	var usr = JSON.parse(window.localStorage.getItem('usr'));
	var pwd = JSON.parse(window.localStorage.getItem('pwd'));
	var strData = JSON.parse(window.localStorage.getItem('imgData'));
	var secPhr = JSON.parse(window.localStorage.getItem('sph'));

	if(u==null)
	{
		window.open("login.html","_self");
	}
	
	for(i=0;i<usr.length;i++)
	{
		if(secPhr[i]==null)
		{
			secPhr[i] = "admin";
		}
		
		if(u==usr[i])
		{
			break;
		}
	}

	var v = pwd[i];
	var w = secPhr[i];
	
	document.getElementById('unp').value=u;
	document.getElementById('pwdp').value=v;
	document.getElementById('spp').value=w;
}	

function myfun1()
{
	document.getElementById("dlgo").style.display="block";
	window.onclick = function(event){
 		if (document.getElementsByClassName('dlgbox')[0].contains(event.target)){
  		} else{
			document.getElementById("dlgo").style.display="none";
  		}		
	};
}		

function myfun2()
{
	document.getElementById("dlg").style.display="none";
	setTimeout(function(){
	var email = prompt("Enter your E-Mail Id: ","");
	if(email!=null && email!="")
		{
			var query = prompt("Enter feedback/issue: ","");
			if(query!=null && query!="")
				{
					if(confirm("Send Feedback/Issue."))
						{
							alert("Unable to connect to server.");
							alert("\n\nContact Personally or whatsapp me.\n\nI can't setup my own remote server yet.\n\nThank you for trying.\n\n");
						}
					else
						{
							alert("You cancelled the process. Retry if you really want to contact me.");
						}
				}
			else
				{
					alert("You can't proceed without any issue/feedback.\n\nPlease Retry if you really want to contact me.");
				}
		}
	else
		{
			alert("You can't proceed without E-mail ID.\n\nPlease Retry if you really want to contact me.");
		}
	document.getElementById("dlgo").style.display="none";
	document.getElementById("dlg").style.display="block";
	},100);
}

function delete_acc()
{
	var usr = JSON.parse(window.localStorage.getItem('usr'));
	var pwd = JSON.parse(window.localStorage.getItem('pwd'));
	var strData = JSON.parse(window.localStorage.getItem('imgData'));
	var secPhr = JSON.parse(window.localStorage.getItem('sph'));

	for(i=0;i<usr.length;i++)
	{
		if(u==usr[i])
		{
			break;
		}
	}

	if(confirm("Are you sure you want to delete your Account?"))
	{
		usr.splice(i,1);		
		pwd.splice(i,1);
		strData.splice(i,1);
		secPhr.splice(i,1);		

		window.localStorage.setItem('usr', JSON.stringify(usr));
		window.localStorage.setItem('pwd', JSON.stringify(pwd));
		window.localStorage.setItem('sph', JSON.stringify(secPhr));
		window.localStorage.setItem("imgData", JSON.stringify(strData));
		alert("Account Deleted Successfully.\nKindly use this software again.");
		logout();
	}
	else
	{
		alert("You choose to keep your account intact. Your account is safe.");
	}
}

function delete_all()
{
	if(confirm("Are you sure you want to delete all your Accounts from this system?"))
	{		
		window.localStorage.removeItem('usr');
		window.localStorage.removeItem('pwd');
		window.localStorage.removeItem('sph');
		window.localStorage.removeItem('imgData');
		alert("All Accounts Deleted Successfully.\nKindly use this software again.");
		logout();
		window.open("login.html","_self");
		window.close();
	}
	else
	{
		alert("You choose to keep your accounts intact. Your all accounts are safe.");
	}	
}

function proc()
{
	alert("For deleting a Particular you need to login.\n\nProcess of deleting a single account is as follows:-\n\n\n   LOGIN --> MY PROFILE --> DELETE YOUR ACCOUNT --> CONFIRM");
}

function close_win()
{
	open("login.html","_self");
	close();
}