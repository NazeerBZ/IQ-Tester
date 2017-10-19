<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="scores.aspx.cs" Inherits="IQ_Tester.scores" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>IQ-Tester</title>    
    <link href="css/questions.css" rel="stylesheet" />
    
    <style>

        .GetIQ {
            padding: 5px 15px;
            background: linear-gradient(#67ae55, #578843);
            background-color: #69a74e;
            box-shadow: inset 0 1px 1px #a4e388;
            border-color: #3b6e22 #3b6e22 #2c5115;            
            color: white;
            cursor: pointer;
            text-decoration: none;
            font-size: 17px;
            width: 319px;
            margin-top: 70px;
            margin-bottom: 10px;
        }

        .getYourIQ{

            margin: 0px auto;
            width:  319px;
        }

        .RangeTable{

            margin: 0px auto;
        }
        
    </style>
    
</head>
    
<body>
    <form id="form1" runat="server">
    <div>
        
        <div class="topBorder">

            <p class="name" id="nameid"></p>

        </div>              
        
        <script src="js/result.js" type="text/javascript"></script>

        <asp:HiddenField ID="HiddenField1" runat="server" ClientIDMode="Static"/>        
        <asp:HiddenField ID="HiddenField2" runat="server" ClientIDMode="Static"/>
        
       <div class="getYourIQ"><asp:Button ID="Button1" runat="server" Text="Check Your IQ" OnClick="Button1_Click" CssClass ="GetIQ"/></div>            

        <table border="1" cellpadding="6" style="text-align:center;" class="RangeTable">

            <tr>
                <th>IQ Range</th>
                <th>Classification</th>
            </tr>
            
            <tr>
                <td>140 and over</td>
                <td>Genius or near genius</td>
            </tr>

            <tr>
                <td>120-140</td>
                <td>Very superior intelligence</td>
            </tr>
            
            <tr>
                <td>110-120</td>
                <td>Superior intelligence</td>
            </tr>
                        
            <tr>
                <td>90-110</td>
                <td>Normal or average intelligence</td>
            </tr>
            
            <tr>
                <td>80-90</td>
                <td>Dullness</td>
            </tr>
            
            <tr>
                <td>70-80</td>
                <td>Borderline deficiency</td>
            </tr>
            
            <tr>
                <td>Below 70</td>
                <td>Definite feeble-mindedness</td>
            </tr>

        </table>

        <asp:HiddenField ID="TotalX" runat="server" ClientIDMode="Static"/>
        <asp:HiddenField ID="TotalXS" runat="server" ClientIDMode="Static"/>
        <asp:HiddenField ID="TotalR" runat="server" ClientIDMode="Static"/>
        
        <script src="js/moveBehind.js" type="text/javascript"></script> 
           
    </div>               
    </form>
        
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" SelectCommand="SELECT * FROM [RowData]"></asp:SqlDataSource>
</body>
</html>
