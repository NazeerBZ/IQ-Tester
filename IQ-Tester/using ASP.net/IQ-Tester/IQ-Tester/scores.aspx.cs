using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.Data;

namespace IQ_Tester
{
    public partial class scores : System.Web.UI.Page
    {
        SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString);

        protected void Page_Load(object sender, EventArgs e)
        {          

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            conn.Open();
            
            SqlCommand cmd = new SqlCommand("SELECT TOP 1 id FROM RowData ORDER BY id DESC", conn);
            SqlDataAdapter adpt0 = new SqlDataAdapter(cmd);
            DataTable dt0 = new DataTable();
            adpt0.Fill(dt0);

            string str = dt0.Rows[0][0].ToString();
            int num = int.Parse(str);
            num++;
            string a = HiddenField1.Value;
            string b = HiddenField2.Value;


            SqlCommand cmd1 = new SqlCommand("insert into RowData values('" + num + "', '" + a + "', '" + b + "')", conn);
            cmd1.ExecuteNonQuery();

            SqlCommand cmd2 = new SqlCommand("select X from RowData", conn);
            SqlDataAdapter adpt = new SqlDataAdapter(cmd2);
            DataTable dt = new DataTable();
            adpt.Fill(dt);

            int xCounter = 0;

            for (int i = 0; i < dt.Rows.Count; i++)
            {
                xCounter = xCounter + int.Parse(dt.Rows[i][0].ToString());
            }

            SqlCommand cmd3 = new SqlCommand("select X_square from RowData", conn);
            SqlDataAdapter adpt1 = new SqlDataAdapter(cmd3);
            DataTable dt1 = new DataTable();
            adpt1.Fill(dt1);
            
            int xSquareCounter = 0;

            for (int i = 0; i < dt1.Rows.Count; i++)
            {
                xSquareCounter = xSquareCounter + int.Parse(dt1.Rows[i][0].ToString());
            }

            TotalX.Value = xCounter.ToString();
            TotalXS.Value = xSquareCounter.ToString();
            TotalR.Value = dt1.Rows.Count.ToString();

            ClientScript.RegisterStartupScript(GetType(), "Javascript", "javascript:saveLocal(); ", true);

            conn.Close();    
        }
                       
    }
}






