

if (!defined('ABSPATH')) {
    exit;
} // Or some other WordPress constant

if (!function_exists('get_plugin_data')) {
    require_once ABSPATH . 'wp-admin/includes/plugin.php';
}

class Globaltraining_Core_Lapis{

        constructor(server, user, password, database, log_mechanism){
            this.server = "82.116.203.131";
            this.user = "Tanais";
            this.password = "Q78ua24BdS";
            this.database = "Phoenix";
            this.log_mechanism = new GlobalTraining_Core_Integration_Logs_Create;
        }
    };

     /**
     * Hook for ninja forms
     * Ninja forms key in advance for each field should much the bellow.
     * This is called through the includes file as a hook created for ninja forms
     * Once a form is submitted is synced to LAPIS as a lead
     */
      function lead_ninja_to_lapis(form_data){
        let fields = form_data['fields'];

        let gt_lead_first_name = null;
        let gt_lead_last_name = null;
        let gt_lead_gender = "O";
        let gt_lead_countryname = null;
        let gt_lead_email = null;
        let gt_lead_phone = null;
        let gt_lead_program = null;
        let gt_lead_location = null;
        let gt_lead_utmSource = null;
        let gt_lead_utmMedium = null;
        let gt_lead_utmTerm = null;
        let gt_lead_utmContent = null;
        let gt_lead_utmCampaign = "Direct";

        fields.forEach(field => {
            if(strcmp(field[ 'key' ],'gt_lead_first_name')==0){
                gt_lead_first_name = field[ 'value' ];
            }
            if(strcmp(field[ 'key' ],'gt_lead_last_name')==0){
                gt_lead_last_name = field[ 'value' ];
            }
            if(strcmp(field[ 'key' ],'gt_lead_gender')==0){
                if(strcmp(field[ 'value' ],'male')==0){
                    gt_lead_gender = "M";
                }else if(strcmp(field[ 'value' ],'female')==0){
                    gt_lead_gender = "F";
                }else{
                    gt_lead_gender = "O"; //O F M
                }

            }else{
                gt_lead_gender = "O"; //O F M
            }
            if(strcmp($field[ 'key' ],'gt_lead_countryname')==0){
                gt_lead_countryname = field[ 'value' ];
            }
            if(strcmp($field[ 'key' ],'gt_lead_email')==0){
                gt_lead_email = field[ 'value' ];
            }
            if(strcmp($field[ 'key' ],'gt_lead_phone')==0){
                gt_lead_phone = field[ 'value' ];
            }
            if(strcmp($field[ 'key' ],'gt_lead_program')==0){
                gt_lead_program = field[ 'value' ];
            }
            if(strcmp($field[ 'key' ],'gt_lead_utmSource')==0){
                gt_lead_utmSource = field[ 'value' ];
            }
            if(strcmp($field[ 'key' ],'gt_lead_utmMedium')==0){
                gt_lead_utmMedium = field[ 'value' ];
            }
            if(strcmp($field[ 'key' ],'gt_lead_utmTerm')==0){
                gt_lead_utmTerm = field[ 'value' ];
            }
            if(strcmp($field[ 'key' ],'gt_lead_utmContent')==0){
                gt_lead_utmContent = field[ 'value' ];
            }
            if(strcmp($field[ 'key' ],'gt_lead_utmCampaign')==0){
                gt_lead_utmCampaign = field[ 'value' ];
            }
        }); 
            
        var lead_data = [
            'firstName' = gt_lead_first_name,
            'lastName' = gt_lead_last_name,
            'gender' = gt_lead_gender,
            'country' = gt_lead_countryname,
            'email' = gt_lead_email,
            'phone' = gt_lead_phone,
            'address'   = null,
            'birthday'	= null,
            'qualificationName' = gt_lead_program,
            'additionalInfo'    = null,
            'utmSource' = gt_lead_utmSource,
            'utmMedium'	= gt_lead_utmMedium,
            'utmTerm'   = gt_lead_utmTerm,
            'utmContent'    = gt_lead_utmContent,
            'utmCampaign'   = gt_lead_utmCampaign
        ]

        emailCountry = "all";
            if(gt_lead_countryname == "Romania"){
                emailCountry ="romania";
            }else if(gt_lead_countryname == "South Africa"){
                emailCountry = 'southafrica';
            }else if(
                gt_lead_countryname == "Nigeria" || gt_lead_countryname == "Egypt"
                || gt_lead_countryname == "Algeria" || gt_lead_countryname == "Angola"
                || gt_lead_countryname == "Morocco" || gt_lead_countryname == "Sudan"
                || gt_lead_countryname == "Kenya" || gt_lead_countryname == "Ethiopia"
                || gt_lead_countryname == "Libya" || gt_lead_countryname == "Tunisia"
                || gt_lead_countryname == "Tanzania" || gt_lead_countryname == "Ghana"
                || gt_lead_countryname == "Ivory Coast" || gt_lead_countryname == "DR Congo"
                || gt_lead_countryname == "Uganda" || gt_lead_countryname == "Zambia"
                || gt_lead_countryname == "Gabon" || gt_lead_countryname == "Mozambique"
                || gt_lead_countryname == "Botswana" || gt_lead_countryname == "Senegal"
                || gt_lead_countryname == "Chad" || gt_lead_countryname == "Equatorial Guinea"
                || gt_lead_countryname == "Congo" || gt_lead_countryname == "Zimbabwe"
                || gt_lead_countryname == "Burkina Faso" || gt_lead_countryname == "Mauritius"
                || gt_lead_countryname == "Mali" || gt_lead_countryname == "Namibia"
                || gt_lead_countryname == "South Sudan" || gt_lead_countryname == "Madagascar"
                || gt_lead_countryname == "Benin" || gt_lead_countryname == "Niger"
                || gt_lead_countryname == "Rwanda" || gt_lead_countryname == "Guinea"
                || gt_lead_countryname == "Sierra Leone" || gt_lead_countryname == "Togo"
                || gt_lead_countryname == "Malawi" || gt_lead_countryname == "Mauritania"
                || gt_lead_countryname == "Eritrea" || gt_lead_countryname == "Swaziland"
                || gt_lead_countryname == "Burundi" || gt_lead_countryname == "Lesotho"
                || gt_lead_countryname == "Liberia" || gt_lead_countryname == "Cape Verde"
                || gt_lead_countryname == "Central African Republic" || gt_lead_countryname == "Djibouti"
                || gt_lead_countryname == "Seychelles" || gt_lead_countryname == "Guinea-Bissau"
                || gt_lead_countryname == "The Gambia" || gt_lead_countryname == "Comoros"
                || gt_lead_countryname == "Sao Tome and Principe" || gt_lead_countryname == "Sahrawi Arab Democratic Republic"
            ){
                $emailCountry = 'africa';
            }else{
                $emailCountry = "all";
            }

        //self::send_email_to_lead($gt_lead_program,$emailCountry, $gt_lead_first_name." ".$gt_lead_last_name,$gt_lead_email);

        try{
            var conn = new PDO("dblib:host=".$this->server.";dbname=".$this->database, $this->user, $this->password);
            conn.setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            var stmt = conn.prepare('EXECUTE [Phoenix].[Web].[AddLeadStudent]
                :firstName,
                :lastName,
                :gender,
                :country,
                :email,
                :phone,
                :address,
                :birthday,
                :qualificationName,
                :additionalInfo,
                :utmSource,
                :utmMedium,
                :utmTerm,
                :utmContent,
                :utmCampaign
            ');
            stmt.execute(
                $lead_data
            );
            if($stmt.execute(lead_data)){
                    body = gt_lead_first_name + ' ' + gt_lead_last_name + "<p>Student data synced to LAPIS. Data Synced:</p>" + 
                    "<ul>" + "<li>First Name: '.$lead_data['firstName'].'</li>" + "<li>Last Name: '.$lead_data['lastName'].'</li>" +
                    "<li>Country: '.$lead_data['country'].'</li>" + "<li>Email: '.$lead_data['email'].'</li>" + "<li>Phone: '.$lead_data['phone'].'</li>" +
                    "<li>Address: '.$lead_data['address'].'</li>" + "<li>Birthday: '.$lead_data['birthday'].'</li>" + "<li>Qualification: '.$lead_data['qualificationName'].'</li>" +
                    "<li>Additional Info: '.$lead_data['additionalInfo'].'</li>" + "<li>UTM-Source: '.$lead_data['utmSource'].'</li>" + "<li>UTM-Medium: '.$lead_data['utmMedium'].'</li>" +
                    "<li>UTM-Term: '.$lead_data['utmTerm'].'</li>" + "<li>UTM-Content: '.$lead_data['utmContent'].'</li>" + "<li>UTM-Campaign: '.$lead_data['utmCampaign'].'</li>" + 
                    "<li>Form Type: Apply </li>" + "</ul>" + "</br>";
                self.send_email_to_dev("Lead", gt_lead_program, "Success", gt_lead_first_name + ' ' + gt_lead_last_name, body);
            }
            else{
                body = gt_lead_first_name + ' ' + gt_lead_last_name + "<p>There was an error with sending data to Lapis. Student data is recovered:</p>" + 
                "<ul>" + "<li>First Name: '.$lead_data['firstName'].'</li>" + "<li>Last Name: '.$lead_data['lastName'].'</li>" +
                "<li>Country: '.$lead_data['country'].'</li>" + "<li>Email: '.$lead_data['email'].'</li>" + "<li>Phone: '.$lead_data['phone'].'</li>" +
                "<li>Address: '.$lead_data['address'].'</li>" + "<li>Birthday: '.$lead_data['birthday'].'</li>" + "<li>Qualification: '.$lead_data['qualificationName'].'</li>" +
                "<li>Additional Info: '.$lead_data['additionalInfo'].'</li>" + "<li>UTM-Source: '.$lead_data['utmSource'].'</li>" + "<li>UTM-Medium: '.$lead_data['utmMedium'].'</li>" +
                "<li>UTM-Term: '.$lead_data['utmTerm'].'</li>" + "<li>UTM-Content: '.$lead_data['utmContent'].'</li>" + "<li>UTM-Campaign: '.$lead_data['utmCampaign'].'</li>" + 
                "<li>Form Type: Apply </li>" + "</ul>" + "</br>" + "<p>Geek details: </br> Debug Information: </p>" + "</br>" + "<u>" + "<li>PDO Statement Execute returned false.</li>" +
                "<li>PDO Error:" + stmt.errorCode() + "</li>" + "<li>PDO Error Details: '.json_encode($stmt->errorInfo()).'</li>" + "</u>";
                self.send_email_to_dev("Lead", gt_lead_program, "Failure", gt_lead_first_name + ' ' + gt_lead_last_name, body);
            }

        }catch(PDOException Exception){
            dbody = "Error: ";
            dbody += "PDO Error during execution of LAPIS Query </br>";
            dbody += "Error Message: " + Exception.getMessage() + "</br>";
            dbody += "Error Code: " + (int)Exception.getCode() + "</br>";
            body = gt_lead_first_name + ' ' + gt_lead_last_name + "<p>There was an error with sending data to Lapis. Student data is recovered:" + 
            "<ul>" + "<li>First Name: '.$lead_data['firstName'].'</li>" + "<li>Last Name: '.$lead_data['lastName'].'</li>" +
            "<li>Country: '.$lead_data['country'].'</li>" + "<li>Email: '.$lead_data['email'].'</li>" + "<li>Phone: '.$lead_data['phone'].'</li>" +
            "<li>Address: '.$lead_data['address'].'</li>" + "<li>Birthday: '.$lead_data['birthday'].'</li>" + "<li>Qualification: '.$lead_data['qualificationName'].'</li>" +
            "<li>Additional Info: '.$lead_data['additionalInfo'].'</li>" + "<li>UTM-Source: '.$lead_data['utmSource'].'</li>" + "<li>UTM-Medium: '.$lead_data['utmMedium'].'</li>" +
            "<li>UTM-Term: '.$lead_data['utmTerm'].'</li>" + "<li>UTM-Content: '.$lead_data['utmContent'].'</li>" + "<li>UTM-Campaign: '.$lead_data['utmCampaign'].'</li>" + 
            "<li>Form Type: Apply </li>" + "</ul>" + "</br>" + "<p>Geek details: </br> Debug Information: </p>" + "</br>" + body;
            self.send_email_to_dev("Lead", gt_lead_program, "Failure", gt_lead_first_name + ' ' + gt_lead_last_name, body);
        }
}