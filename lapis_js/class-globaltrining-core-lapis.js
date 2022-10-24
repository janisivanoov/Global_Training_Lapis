const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan('combined'));

const studentSchema = new Schema({
	firstName: John,
	lastName: John,
	email: John,
	password: John,
	permissionLevel: Number
});

//const student model = mongoose.model('Student', studentSchema);

//if (!defined('ABSPATH')) {
  //  exit;
//} // Or some other WordPress constant

//if (!function_exists('get_plugin_data')) {
  //  require_once ABSPATH . 'wp-admin/includes/plugin.php';
//}

app.get('/lead_ninja_to_lapis', (req, res) => {
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
        if(strcmp(field[ 'key' ],'gt_lead_countryname')==0){
            gt_lead_countryname = field[ 'value' ];
        }
        if(strcmp(field[ 'key' ],'gt_lead_email')==0){
            gt_lead_email = field[ 'value' ];
        }
        if(strcmp(field[ 'key' ],'gt_lead_phone')==0){
            gt_lead_phone = field[ 'value' ];
        }
        if(strcmp(field[ 'key' ],'gt_lead_program')==0){
            gt_lead_program = field[ 'value' ];
        }
        if(strcmp(field[ 'key' ],'gt_lead_utmSource')==0){
            gt_lead_utmSource = field[ 'value' ];
        }
        if(strcmp(field[ 'key' ],'gt_lead_utmMedium')==0){
            gt_lead_utmMedium = field[ 'value' ];
        }
        if(strcmp(field[ 'key' ],'gt_lead_utmTerm')==0){
            gt_lead_utmTerm = field[ 'value' ];
        }
        if(strcmp(field[ 'key' ],'gt_lead_utmContent')==0){
            gt_lead_utmContent = field[ 'value' ];
        }
        if(strcmp(field[ 'key' ],'gt_lead_utmCampaign')==0){
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
            emailCountry = 'africa';
        }else{
            emailCountry = "all";
        }

    //self::send_email_to_lead($gt_lead_program,$emailCountry, $gt_lead_first_name." ".$gt_lead_last_name,$gt_lead_email);

    try{
        var conn = new PDO("dblib:host=".this->server.";dbname=".this->database, this->user, this->password);
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
            lead_data
        );
        if(stmt.execute(lead_data)){
                body = gt_lead_first_name + ' ' + gt_lead_last_name + "<p>Student data synced to LAPIS. Data Synced:</p>" + 
                "<ul>" + "<li>First Name: 'lead_data['firstName'].'</li>" + "<li>Last Name: 'lead_data['lastName'].'</li>" +
                "<li>Country: 'lead_data['country'].'</li>" + "<li>Email: 'lead_data['email'].'</li>" + "<li>Phone: 'lead_data['phone'].'</li>" +
                "<li>Address: 'lead_data['address'].'</li>" + "<li>Birthday: 'lead_data['birthday'].'</li>" + "<li>Qualification: 'lead_data['qualificationName'].'</li>" +
                "<li>Additional Info: 'lead_data['additionalInfo'].'</li>" + "<li>UTM-Source: 'lead_data['utmSource'].'</li>" + "<li>UTM-Medium: 'lead_data['utmMedium'].'</li>" +
                "<li>UTM-Term: 'lead_data['utmTerm'].'</li>" + "<li>UTM-Content: 'lead_data['utmContent'].'</li>" + "<li>UTM-Campaign: 'lead_data['utmCampaign'].'</li>" + 
                "<li>Form Type: Apply </li>" + "</ul>" + "</br>";
            self.send_email_to_dev("Lead", gt_lead_program, "Success", gt_lead_first_name + ' ' + gt_lead_last_name, body);
        }
        else{
            body = gt_lead_first_name + ' ' + gt_lead_last_name + "<p>There was an error with sending data to Lapis. Student data is recovered:</p>" + 
            "<ul>" + "<li>First Name: 'lead_data['firstName'].'</li>" + "<li>Last Name: 'lead_data['lastName'].'</li>" +
            "<li>Country: 'lead_data['country'].'</li>" + "<li>Email: 'lead_data['email'].'</li>" + "<li>Phone: 'lead_data['phone'].'</li>" +
            "<li>Address: 'lead_data['address'].'</li>" + "<li>Birthday: 'lead_data['birthday'].'</li>" + "<li>Qualification: 'lead_data['qualificationName'].'</li>" +
            "<li>Additional Info: 'lead_data['additionalInfo'].'</li>" + "<li>UTM-Source: 'lead_data['utmSource'].'</li>" + "<li>UTM-Medium: 'lead_data['utmMedium'].'</li>" +
            "<li>UTM-Term: 'lead_data['utmTerm'].'</li>" + "<li>UTM-Content: 'lead_data['utmContent'].'</li>" + "<li>UTM-Campaign: 'lead_data['utmCampaign'].'</li>" + 
            "<li>Form Type: Apply </li>" + "</ul>" + "</br>" + "<p>Geek details: </br> Debug Information: </p>" + "</br>" + "<u>" + "<li>PDO Statement Execute returned false.</li>" +
            "<li>PDO Error:" + stmt.errorCode() + "</li>" + "<li>PDO Error Details: '.json_encode(stmt->errorInfo()).'</li>" + "</u>";
            self.send_email_to_dev("Lead", gt_lead_program, "Failure", gt_lead_first_name + ' ' + gt_lead_last_name, body);
        }

    }catch(PDOException Exception){
        dbody = "Error: ";
        dbody += "PDO Error during execution of LAPIS Query </br>";
        dbody += "Error Message: " + Exception.getMessage() + "</br>";
        dbody += "Error Code: " + (int)Exception.getCode() + "</br>";
        body = gt_lead_first_name + ' ' + gt_lead_last_name + "<p>There was an error with sending data to Lapis. Student data is recovered:" + 
        "<ul>" + "<li>First Name: 'lead_data['firstName'].'</li>" + "<li>Last Name: 'lead_data['lastName'].'</li>" +
        "<li>Country: 'lead_data['country'].'</li>" + "<li>Email: 'lead_data['email'].'</li>" + "<li>Phone: 'lead_data['phone'].'</li>" +
        "<li>Address: 'lead_data['address'].'</li>" + "<li>Birthday: 'lead_data['birthday'].'</li>" + "<li>Qualification: 'lead_data['qualificationName'].'</li>" +
        "<li>Additional Info: 'lead_data['additionalInfo'].'</li>" + "<li>UTM-Source: 'lead_data['utmSource'].'</li>" + "<li>UTM-Medium: 'lead_data['utmMedium'].'</li>" +
        "<li>UTM-Term: 'lead_data['utmTerm'].'</li>" + "<li>UTM-Content: 'lead_data['utmContent'].'</li>" + "<li>UTM-Campaign: 'lead_data['utmCampaign'].'</li>" + 
        "<li>Form Type: Apply </li>" + "</ul>" + "</br>" + "<p>Geek details: </br> Debug Information: </p>" + "</br>" + body;
        self.send_email_to_dev("Lead", gt_lead_program, "Failure", gt_lead_first_name + ' ' + gt_lead_last_name, body);
    }
}
});

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
     * Removes special characters from input
     */
function cleanInput(input) {
    special_chars = array("?", "[", "]", "/", "\\", "=", "<", ">", ":", ";", ",", "'", "\"", "$", "*", "(", ")", "|", "~", "`", "!", "{", "}");
    return trim(str_replace('#', 'No.', str_replace('&', 'and', str_replace(special_chars, '', input))));
}


app.get('/student_to_lapis', (req, res) => {
    /**
 * Student to lapis
 * Sync data to LAPIS a student on order complete
 */
function student_to_lapis(order_id){
    var wpdb;
    var order = wc_get_order(order_id);
    if(order){
        foreach (order.get_items() as item_id === item){
            $product_id = $item->get_product_id();
            $is_lapis_sync = get_post_meta($product_id,'gt_lapis_sync',true);
                if(strcmp("yes",$is_lapis_sync) == 0){
                    $lapis_category = get_post_meta($product_id,'gt_lapis_category',true);
                    if(strcmp("no",$lapis_category)!==0){
                        $user_id = $order->get_user_id();
                        $_isNew = true;

                        $paid_order_statuses = array_map( 'esc_sql', wc_get_is_paid_statuses() );
                        $count = $wpdb->get_var( $wpdb->prepare("
                            SELECT COUNT(p.ID) FROM {$wpdb->prefix}posts AS p
                            INNER JOIN {$wpdb->prefix}postmeta AS pm ON p.ID = pm.post_id
                            WHERE p.post_status IN ( 'wc-" . implode( "','wc-", $paid_order_statuses ) . "' )
                            AND p.post_type LIKE 'shop_order'
                            AND pm.meta_key = '_customer_user'
                            AND pm.meta_value = %s
                            LIMIT 1
                        ", $user_id ) );

                        if($count > 0){
                            $_isNew = false;
                        }


                        $gender= get_user_meta( $user_id, 'user_gender', true );
                        switch ($gender){
                            case "male":
                                $gender = "M";
                                break;
                            case "female":
                                $gender = "F";
                                break;
                            case "other":
                                $gender = "O";
                                break;
                            default:
                                $gender="O";
                        }
                        $product = wc_get_product( $product_id );
                        $sku = $product->get_sku();
                        $pNumber = null;
                        $exelixis_account = get_option('gt_settings_exelixis_account');
                        $exelixis_log_tbl = $wpdb->prefix.'unic_gt_exelixis_sync_log';

                        if(strcmp($exelixis_account,"no") != 0){

                            $pNumber = $this->exelixis_sync($order_id,$gender,$sku,$user_id);
                            $pnumber_log = [
                                "order_id" => $order_id,
                                'api_type'=> "exelixis_synced",
                                'api_response' => 'Exelixis Integration completed',
                                'user_id' => $user_id,
                                'student_id' => $pNumber,
                                'execution_date' =>  current_time( 'mysql' )
                            ];

                            $wpdb->insert($exelixis_log_tbl, $pnumber_log);
                        }else{
                            $pnumber_log = [
                                "order_id" => $order_id,
                                'api_type'=> "exelixis_disabled",
                                'api_response' => 'Exelixis Integration is Disabled ONLY LAPIS allowed',
                                'user_id' => $user_id,
                                'student_id' => "INFO",
                                'execution_date' =>  current_time( 'mysql' )
                            ];

                            $wpdb->insert($exelixis_log_tbl, $pnumber_log);
                        }//End if exelixis account = no (Lapis only)


                    $firstName=  $order->get_billing_first_name();
                    $enroll_data['firstName'] = (isset($firstName)? $firstName : null);
                    $lastName = $order->get_billing_last_name();
                    $enroll_data['lastName'] = (isset($lastName)?$lastName:null);
                    //Get Gender and birthday from user profile
                    $enroll_data['gender'] = (isset($gender)?$gender:"O");
                    $bCountry = WC()->countries->countries[$order->get_billing_country()];
                    $enroll_data['country'] = (isset($bCountry)?$bCountry:null);
                    $bEmail = $order->get_billing_email();
                    $enroll_data['email'] = (isset($bEmail)?$bEmail:null);
                    $enroll_data['phone'] =  null;
                    $enroll_data['birthday'] = null;//$bday;
                    $enroll_data['qualificationName'] =  $lapis_category;
                    $enroll_data['additionalInfo'] = null;
                    $enroll_data['isNew'] =  $_isNew;
                    $enroll_data['pnumber'] =  $pNumber;
                    $enroll_data['opencartId'] =  "WC".$order->get_user_id();
                    $enroll_data['utmSource'] = "Direct";
                    $enroll_data['utmMedium'] = "Store";
                    $enroll_data['utmTerm'] = "https://globaltraining.org";
                    $enroll_data['utmContent'] = "None";
                    $enroll_data['utmCampaign'] =  $lapis_category;

                    try{
                        $conn = new PDO("dblib:host=".$this->server.";dbname=".$this->database, $this->user, $this->password);
                        $conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                        $stmt = $conn->prepare('EXECUTE [Phoenix].[Web].[AddStoreStudent]
                                                :firstName,
                                                :lastName,
                                                :gender,
                                                :country,
                                                :email,
                                                :phone,
                                                :birthday,
                                                :qualificationName,
                                                :additionalInfo,
                                                :isNew,
                                                :pnumber,
                                                :opencartId,
                                                :utmSource,
                                                :utmMedium,
                                                :utmTerm,
                                                :utmContent,
                                                :utmCampaign
                                            ');

                        if($stmt->execute($enroll_data)){
                            $body = $firstName.' '.$lastName + "<p>Student data synced to LAPIS. Data Synced:</p>" + 
                            "<ul>" + "<li>First Name: '.$enroll_data['firstName'].'</li>" + "<li>Last Name: '.$enroll_data['lastName'].'</li>" +
                            "<li>Gender: '.$enroll_data['gender'].'</li>" + "<li>Country: '.$enroll_data['country'].'</li>" + "<li>Email: '.$enroll_data['email'].'</li>" +
                            "<li>Phone: '.$enroll_data['phone'].'</li>" + "<li>Birthday: '.$enroll_data['birthday'].'</li>" + "<li>Qualification: '.$enroll_data['qualificationName'].'</li>" +
                            "<li>Additional Info: '.$enroll_data['additionalInfo'].'</li>" + "<li>Is New To Qualification: '.$enroll_data['isNew'].'</li>" + "<li>PNumber: '.$enroll_data['pnumber'].'</li>" +
                            "<li>OpenCartID: '.$enroll_data['opencartId'].'</li>" + "<li>UTM-Source: '.$enroll_data['utmSource'].'</li>" + "<li>UTM-Medium: '.$enroll_data['utmMedium'].'</li>" + 
                            "<li>UTM-Term: '.$enroll_data['utmTerm'].'</li>" + "<li>UTM-Content: '.$enroll_data['utmContent'].'</li>" + "<li>UTM-Campaign: '.$enroll_data['utmCampaign'].'</li>" + 
                            "<li>Form Type: Enroll </li>" + "</ul>" + "</br>";
                            self.send_email_to_dev("Student", $lapis_category, "Success", $firstName.' '.$lastName, $body);
                        }else{
                            $body = $firstName.' '.$lastName + "<p>There was an error with sending data to Lapis. Student data is recovered:</p>" + 
                            "<ul>" + "<li>First Name: '.$enroll_data['firstName'].'</li>" + "<li>Last Name: '.$enroll_data['lastName'].'</li>" +
                            "<li>Gender: '.$enroll_data['gender'].'</li>" + "<li>Country: '.$enroll_data['country'].'</li>" + "<li>Email: '.$enroll_data['email'].'</li>" +
                            "<li>Phone: '.$enroll_data['phone'].'</li>" + "<li>Birthday: '.$enroll_data['birthday'].'</li>" + "<li>Qualification: '.$enroll_data['qualificationName'].'</li>" +
                            "<li>Additional Info: '.$enroll_data['additionalInfo'].'</li>" + "<li>Is New To Qualification: '.$enroll_data['isNew'].'</li>" + "<li>PNumber: '.$enroll_data['pnumber'].'</li>" +
                            "<li>OpenCartID: '.$enroll_data['opencartId'].'</li>" + "<li>UTM-Source: '.$enroll_data['utmSource'].'</li>" + "<li>UTM-Medium: '.$enroll_data['utmMedium'].'</li>" + 
                            "<li>UTM-Term: '.$enroll_data['utmTerm'].'</li>" + "<li>UTM-Content: '.$enroll_data['utmContent'].'</li>" + "<li>UTM-Campaign: '.$enroll_data['utmCampaign'].'</li>" + 
                            "<li>Form Type: Enroll </li>" + "</ul>" + "</br>" + "<p>Geek details: </br> Debug Information: </p>" + "</br>" + "<u>" + "<li>PDO Statement Execute returned false.</li>" +
                            "<li>PDO Error: '.$stmt->errorCode().'</li>" + "<li>PDO Error Details: '.json_encode($stmt->errorInfo()).'</li>" + "</u>";
                            self.send_email_to_dev("Student", $lapis_category, "Failure", $firstName.' '.$lastName, $body);

                        }
                    }catch(PDOException $Exception){
                        $dbody = "Error: ";
                        $dbody .= "PDO Error during execution of LAPIS Query </br>";
                        $dbody .= "Error Message: ".$Exception->getMessage()."</br>";
                        $dbody .= "Error Code: ".(int)$Exception->getCode()."</br>";
                        $body = $firstName.' '.$lastName. '
                                <p>There was an error with sending data to Lapis. Student data is recovered:</p>
                                <ul>
                                    <li>First Name: '.$enroll_data['firstName'].'</li>
                                    <li>Last Name: '.$enroll_data['lastName'].'</li>
                                    <li>Gender: '.$enroll_data['gender'].'</li>
                                    <li>Country: '.$enroll_data['country'].'</li>
                                    <li>Email: '.$enroll_data['email'].'</li>
                                    <li>Phone: '.$enroll_data['phone'].'</li>
                                    <li>Birthday: '.$enroll_data['birthday'].'</li>
                                    <li>Qualification: '.$enroll_data['qualificationName'].'</li>
                                    <li>Additional Info: '.$enroll_data['additionalInfo'].'</li>
                                    <li>Is New To Qualification: '.$enroll_data['isNew'].'</li>
                                    <li>PNumber: '.$enroll_data['pnumber'].'</li>
                                    <li>OpenCartID: '.$enroll_data['opencartId'].'</li>
                                    <li>UTM-Source: '.$enroll_data['utmSource'].'</li>
                                    <li>UTM-Medium: '.$enroll_data['utmMedium'].'</li>
                                    <li>UTM-Term: '.$enroll_data['utmTerm'].'</li>
                                    <li>UTM-Content: '.$enroll_data['utmContent'].'</li>
                                    <li>UTM-Campaign: '.$enroll_data['utmCampaign'].'</li>
                                    <li>Form Type: Enroll </li>
                                </ul>
                                </br>
                                <p>Geek details: </br> Debug Information: </p>
                                </br>
                                '.$dbody.'
                            ';
                        self::send_email_to_dev("Student", $lapis_category, "Failure", $firstName.' '.$lastName, $body);
                    }
                }
            }else{ //If not lapis
                $exelixis_account = get_option('gt_settings_exelixis_account');
                if(strcmp($exelixis_account,"no") != 0){ //Exelixis not disabled
                    $user_id = $order->get_user_id();
                    $gender= get_user_meta( $user_id, 'user_gender', true );
                    switch ($gender){
                        case "male":
                            $gender = "M";
                            break;
                        case "female":
                            $gender = "F";
                            break;
                        case "other":
                            $gender = "O";
                            break;
                        default:
                            $gender="O";
                    }
                    $product = wc_get_product( $product_id );
                    $sku = $product->get_sku();
                    $this->exelixis_sync($order_id,$gender,$sku,$user_id);
                }
            }
        }
    }
}
});


app.get('/exelixis_sync', (req, res) => {
    /**
   * Sync data to Exelixis
   * On order complete billing information are gathered to by synced to Exelixis as student
   * Once data are received and validated by Exelixis then a P number is issued by Exelixis system and returned
   * On successful P number creation then a payment is registered to Exelixis to mark that student has payed for the course
   * This function is called from sync to LAPIS as student
   */
  function exelixis_sync($order_id, $gender, $sku, $user_id){
      /**
      * START OF EXELIXIs
      */
       //Exelixis Server
  
       $exelixisServer = 'http://exelixis.unic.ac.cy/';
       $pNumber = null;
      /**
       * Check Exelixis Account
       */
      $exelixis_account = get_option('gt_settings_exelixis_account');
      global $wpdb;
      $order = wc_get_order($order_id);
      if($order){
          $bday = strval(get_user_meta( $user_id, 'user_date_of_birth', true ));
          $a = preg_split ( '/\//', $bday );
          $bday = date('dmY', mktime( 0, 0, 0, $a[1], $a[2], $a[0] ) );
          //Prepare exelixis request url
          if(strcmp($exelixis_account,"nic") == 0){
              $ex_url = $exelixisServer.'ptd-create-student/';
          }
          if(strcmp($exelixis_account,"lim") == 0){
              $ex_url = $exelixisServer.'gti-create-student/';
          }
          //$order->get_billing_address_2()
          $address2 = ($order->get_billing_address_2() == '') ? "_" : $order->get_billing_address_2();
          $ex_url = $ex_url.'OpenCardId='."WC".urlencode($order_id).'&LastName='.urlencode(self::cleanInput($order->get_billing_last_name())).'&FirstName='.urlencode(self::cleanInput($order->get_billing_first_name())).'&DateOfBirth='.urlencode($bday).'&Gender='.urlencode($gender).'&NationalityId='.urlencode($order->get_billing_country()).'&Street1='.urlencode(self::cleanInput($order->get_billing_address_1())).'&Street2='.urlencode(self::cleanInput($address2)).'&PostalCode='.urlencode(self::cleanInput($order->get_billing_postcode())).'&City='.urlencode(self::cleanInput($order->get_billing_city())).'&CountryId='.urlencode(self::cleanInput($order->get_billing_country())).'&HomeTelephone='.urlencode(self::cleanInput($order->get_billing_country())).'&OfficeTelephone=_&MobileNo=_&Fax='.self::cleanInput("__").'&Email='.urlencode($order->get_billing_email()).'&IdentityNo=_&CourseId='.urlencode($sku);
          $ch = curl_init();
          curl_setopt($ch, CURLOPT_URL, $ex_url);
          curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
          curl_setopt($ch, CURLOPT_ENCODING, 'UTF-8');
          $curlresult = curl_exec($ch);
          $xml = simplexml_load_string($curlresult);
  
          // Check for errors
          if ($xml->return_code == 0) {
              // If there is no error, the p-number is retrieved
                  $epnumber = $xml->student_id;
              if ($epnumber != '') {
                  $pNumber = $epnumber;
              }
          }
          if ($xml->return_code == 1) {
          // If there is no error, the p-number is retrieved
                  $epnumber = $xml->return_message;
              if ($epnumber != '' && substr($epnumber, 0, 1) == 'P' && strlen($epnumber) == 8) {
                  $pNumber = $epnumber;
              }
          }
  
          $api_type = "exelixis_create_student";
          if(strcmp($exelixis_account,"nic") == 0){
              $api_type = 'nicosia_exelixis_create_student';
          }
          if(strcmp($exelixis_account,"lim") == 0){
              $api_type = 'limassol_exelixis_create_student';
          }
  
          if($xml->return_code != 1 && $xml->return_code !== 0 ){
              $log = $this->log_mechanism->create_system_log(
                  $order_id,
                  'exelixis',
                  $api_type,
                  json_encode($xml->return_message),
                  current_time( 'mysql' )
              );
           }
  
          $exelixis_log_tbl = $wpdb->prefix.'unic_gt_exelixis_sync_log';
  
          $pNumber = strval($pNumber);
  
          if($pNumber == null ){
              $pnumber_log = [
                  "order_id" => $order_id,
                  'api_type'=> $api_type,
                  'api_response' => json_encode([
                      "url"=>$ex_url,
                      "xml"=>$xml
                  ]),
                  'user_id' => $user_id,
                  'student_id' => "ERROR",
                  'execution_date' =>  current_time( 'mysql' )
              ];
  
              $wpdb->insert($exelixis_log_tbl, $pnumber_log);
          }else{
              $pnumber_log = [
                  "order_id" => $order_id,
                  'api_type'=> $api_type,
                  'api_response' => json_encode([
                      "url"=>$ex_url,
                      "xml"=>$xml
                  ]),
                  'user_id' => $user_id,
                  'student_id' => $pNumber,
                  'execution_date' =>  current_time( 'mysql' )
              ];
              $wpdb->insert($exelixis_log_tbl, $pnumber_log);
          }
          curl_close($ch);
  
          //register payment in Exelixis
  
          $payment_date = date('d').date('m').date('Y');
          $payment_method = null;
          //jcc_payment_gateway
          if(strcmp(strtolower($order->get_payment_method()),"jcc_payment_gateway") == 0){
              $payment_method = "JCC";
          }
          if (strpos($order->get_payment_method(), 'JCC') !== false) {
              $payment_method = "JCC";
          }
          if(strcmp(strtolower($order->get_payment_method()),"bacs") == 0){
              $payment_method ="BANKTRANSFER";
          }
          if(strcmp(strtolower($order->get_payment_method()),"paypal") == 0){
              $payment_method ="PAYPAL";
          }
          $paymentresult = "Not Registered";
          sleep(1);
          if($pNumber != null){
              if($payment_method != null){
                  $total=$order->get_total();
                  $payment_method = "JCC";
                  if(strcmp($exelixis_account,"nic") == 0){
                      $payment_url = $exelixisServer.'ptd-create-payment/';
                  }
                  if(strcmp($exelixis_account,"lim") == 0){
                      $payment_url = $exelixisServer.'gti-create-payment/';
                  }
                  $payment_url = $exelixisServer."StudentId=".$pNumber."&PaymentDate=".$payment_date."&PaymentAmount=".number_format($total, 2, '.', '')."&PaymentMethod=".$payment_method."&Reference=".$order_id; // Constructing the URL
  
                  $api_type_payment = "exelixis_create_payment";
                  if(strcmp($exelixis_account,"nic") == 0){
                      $api_type_payment = 'nicosia_exelixis_create_payment';
                  }
                  if(strcmp($exelixis_account,"lim") == 0){
                      $api_type_payment = 'limassol_exelixis_create_payment';
                  }
  
                  $pnumber_log = [
                      "order_id" => $order_id,
                      'api_type'=> $api_type_payment,
                      'api_response' => "Preparing URL: ".$payment_url,
                      'user_id' => $user_id,
                      'student_id' => $pNumber,
                      'execution_date' =>  current_time( 'mysql' )
                  ];
  
                  $wpdb->insert($exelixis_log_tbl, $pnumber_log);
  
  
                  $ch = curl_init();
                  curl_setopt($ch, CURLOPT_URL, $payment_url);
                  curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
                  curl_setopt($ch, CURLOPT_ENCODING, 'UTF-8');
                  $curlresult = curl_exec($ch);
                  $paymentresult = $curlresult;
                  $xml = simplexml_load_string($curlresult);
  
  
                  if ($xml->return_code == 1) {
                      $pnumber_log = [
                          "order_id" => $order_id,
                          'api_type'=> $api_type_payment,
                          'api_response' => json_encode($xml),
                          'user_id' => $user_id,
                          'student_id' => $pNumber,
                          'execution_date' =>  current_time( 'mysql' )
                      ];
                      $wpdb->insert($exelixis_log_tbl, $pnumber_log);
                  }else{
                      $pnumber_log = [
                          "order_id" => $order_id,
                          'api_type'=> $api_type_payment,
                          'api_response' => json_encode($xml),
                          'user_id' => $user_id,
                          'student_id' => $pNumber,
                          'execution_date' =>  current_time( 'mysql' )
                      ];
                      $wpdb->insert($exelixis_log_tbl, $pnumber_log);
                  }
                  curl_close($ch);
              }else{
  
                  $api_type_payment = "exelixis_create_payment";
                  if(strcmp($exelixis_account,"nic") == 0){
                      $api_type_payment = 'nicosia_exelixis_create_payment';
                  }
                  if(strcmp($exelixis_account,"lim") == 0){
                      $api_type_payment = 'limassol_exelixis_create_payment';
                  }
  
                  $pnumber_log = [
                      "order_id" => $order_id,
                      'api_type'=> $api_type_payment,
                      'api_response' => "Could not proceed: Payment method returned null",
                      'user_id' => $user_id,
                      'student_id' => $pNumber,
                      'execution_date' =>  current_time( 'mysql' )
                  ];
  
                  $wpdb->insert($exelixis_log_tbl, $pnumber_log);
  
              }
  
  
          }else{
  
              $api_type_payment = "exelixis_create_payment";
              if(strcmp($exelixis_account,"nic") == 0){
                  $api_type_payment = 'nicosia_exelixis_create_payment';
              }
              if(strcmp($exelixis_account,"lim") == 0){
                  $api_type_payment = 'limassol_exelixis_create_payment';
              }
  
              $pnumber_log = [
                  "order_id" => $order_id,
                  'api_type'=> $api_type_payment,
                  'api_response' => "Could not proceed: no student number issued",
                  'user_id' => $user_id,
                  'student_id' => "ERROR",
                  'execution_date' =>  current_time( 'mysql' )
              ];
  
              $wpdb->insert($exelixis_log_tbl, $pnumber_log);
  
          }
      }
  
  
      /**
      * End of Exelixis
      */
  
      $pnumber_log = [
          "order_id" => $order_id,
          'api_type'=> $api_type_payment,
          'api_response' => "Process completed: ".$pNumber,
          'user_id' => $user_id,
          'student_id' => $pNumber,
          'execution_date' =>  current_time( 'mysql' )
      ];
  
      $wpdb->insert($exelixis_log_tbl, $pnumber_log);
  
      return $pNumber;
  }
});


app.listen(3001, () => {
    console.log('listening on port 3001');
});

////////////////////////////////////////////////////////////////////////////////

/**
     * Student to lapis
     * Sync data to LAPIS a student on order complete
     */
 public function student_to_lapis($order_id){
    global $wpdb;
    $order = wc_get_order($order_id);
    if($order){
        foreach ($order->get_items() as $item_id =>$item):
            $product_id = $item->get_product_id();
            $is_lapis_sync = get_post_meta($product_id,'gt_lapis_sync',true);
                if(strcmp("yes",$is_lapis_sync) == 0){
                    $lapis_category = get_post_meta($product_id,'gt_lapis_category',true);
                    if(strcmp("no",$lapis_category)!==0){
                        $user_id = $order->get_user_id();
                        $_isNew = true;

                        $paid_order_statuses = array_map( 'esc_sql', wc_get_is_paid_statuses() );
                        $count = $wpdb->get_var( $wpdb->prepare("
                            SELECT COUNT(p.ID) FROM {$wpdb->prefix}posts AS p
                            INNER JOIN {$wpdb->prefix}postmeta AS pm ON p.ID = pm.post_id
                            WHERE p.post_status IN ( 'wc-" . implode( "','wc-", $paid_order_statuses ) . "' )
                            AND p.post_type LIKE 'shop_order'
                            AND pm.meta_key = '_customer_user'
                            AND pm.meta_value = %s
                            LIMIT 1
                        ", $user_id ) );

                        if($count > 0){
                            $_isNew = false;
                        }


                        $gender= get_user_meta( $user_id, 'user_gender', true );
                        switch ($gender){
                            case "male":
                                $gender = "M";
                                break;
                            case "female":
                                $gender = "F";
                                break;
                            case "other":
                                $gender = "O";
                                break;
                            default:
                                $gender="O";
                        }
                        $product = wc_get_product( $product_id );
                        $sku = $product->get_sku();
                        $pNumber = null;
                        $exelixis_account = get_option('gt_settings_exelixis_account');
                        $exelixis_log_tbl = $wpdb->prefix.'unic_gt_exelixis_sync_log';

                        if(strcmp($exelixis_account,"no") != 0){

                            $pNumber = $this->exelixis_sync($order_id,$gender,$sku,$user_id);
                            $pnumber_log = [
                                "order_id" => $order_id,
                                'api_type'=> "exelixis_synced",
                                'api_response' => 'Exelixis Integration completed',
                                'user_id' => $user_id,
                                'student_id' => $pNumber,
                                'execution_date' =>  current_time( 'mysql' )
                            ];

                            $wpdb->insert($exelixis_log_tbl, $pnumber_log);
                        }else{
                            $pnumber_log = [
                                "order_id" => $order_id,
                                'api_type'=> "exelixis_disabled",
                                'api_response' => 'Exelixis Integration is Disabled ONLY LAPIS allowed',
                                'user_id' => $user_id,
                                'student_id' => "INFO",
                                'execution_date' =>  current_time( 'mysql' )
                            ];

                            $wpdb->insert($exelixis_log_tbl, $pnumber_log);
                        }//End if exelixis account = no (Lapis only)


                    $firstName=  $order->get_billing_first_name();
                    $enroll_data['firstName'] = (isset($firstName)? $firstName : null);
                    $lastName = $order->get_billing_last_name();
                    $enroll_data['lastName'] = (isset($lastName)?$lastName:null);
                    //Get Gender and birthday from user profile
                    $enroll_data['gender'] = (isset($gender)?$gender:"O");
                    $bCountry = WC()->countries->countries[$order->get_billing_country()];
                    $enroll_data['country'] = (isset($bCountry)?$bCountry:null);
                    $bEmail = $order->get_billing_email();
                    $enroll_data['email'] = (isset($bEmail)?$bEmail:null);
                    $enroll_data['phone'] =  null;
                    $enroll_data['birthday'] = null;//$bday;
                    $enroll_data['qualificationName'] =  $lapis_category;
                    $enroll_data['additionalInfo'] = null;
                    $enroll_data['isNew'] =  $_isNew;
                    $enroll_data['pnumber'] =  $pNumber;
                    $enroll_data['opencartId'] =  "WC".$order->get_user_id();
                    $enroll_data['utmSource'] = "Direct";
                    $enroll_data['utmMedium'] = "Store";
                    $enroll_data['utmTerm'] = "https://globaltraining.org";
                    $enroll_data['utmContent'] = "None";
                    $enroll_data['utmCampaign'] =  $lapis_category;

                    try{
                        $conn = new PDO("dblib:host=".$this->server.";dbname=".$this->database, $this->user, $this->password);
                        $conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                        $stmt = $conn->prepare('EXECUTE [Phoenix].[Web].[AddStoreStudent]
                                                :firstName,
                                                :lastName,
                                                :gender,
                                                :country,
                                                :email,
                                                :phone,
                                                :birthday,
                                                :qualificationName,
                                                :additionalInfo,
                                                :isNew,
                                                :pnumber,
                                                :opencartId,
                                                :utmSource,
                                                :utmMedium,
                                                :utmTerm,
                                                :utmContent,
                                                :utmCampaign
                                            ');

                        if($stmt->execute($enroll_data)){
                            $body = $firstName.' '.$lastName. '
                                <p>Student data synced to LAPIS. Data Synced:</p>
                                <ul>
                                    <li>First Name: '.$enroll_data['firstName'].'</li>
                                    <li>Last Name: '.$enroll_data['lastName'].'</li>
                                    <li>Gender: '.$enroll_data['gender'].'</li>
                                    <li>Country: '.$enroll_data['country'].'</li>
                                    <li>Email: '.$enroll_data['email'].'</li>
                                    <li>Phone: '.$enroll_data['phone'].'</li>
                                    <li>Birthday: '.$enroll_data['birthday'].'</li>
                                    <li>Qualification: '.$enroll_data['qualificationName'].'</li>
                                    <li>Additional Info: '.$enroll_data['additionalInfo'].'</li>
                                    <li>Is New To Qualification: '.$enroll_data['isNew'].'</li>
                                    <li>PNumber: '.$enroll_data['pnumber'].'</li>
                                    <li>OpenCartID: '.$enroll_data['opencartId'].'</li>
                                    <li>UTM-Source: '.$enroll_data['utmSource'].'</li>
                                    <li>UTM-Medium: '.$enroll_data['utmMedium'].'</li>
                                    <li>UTM-Term: '.$enroll_data['utmTerm'].'</li>
                                    <li>UTM-Content: '.$enroll_data['utmContent'].'</li>
                                    <li>UTM-Campaign: '.$enroll_data['utmCampaign'].'</li>
                                    <li>Form Type: Enroll </li>
                                </ul>
                                </br>
                            ';

                            self::send_email_to_dev("Student", $lapis_category, "Success", $firstName.' '.$lastName, $body);
                        }else{
                            $body = $firstName.' '.$lastName. '
                                <p>There was an error with sending data to Lapis. Student data is recovered:</p>
                                <ul>
                                    <li>First Name: '.$enroll_data['firstName'].'</li>
                                    <li>Last Name: '.$enroll_data['lastName'].'</li>
                                    <li>Gender: '.$enroll_data['gender'].'</li>
                                    <li>Country: '.$enroll_data['country'].'</li>
                                    <li>Email: '.$enroll_data['email'].'</li>
                                    <li>Phone: '.$enroll_data['phone'].'</li>
                                    <li>Birthday: '.$enroll_data['birthday'].'</li>
                                    <li>Qualification: '.$enroll_data['qualificationName'].'</li>
                                    <li>Additional Info: '.$enroll_data['additionalInfo'].'</li>
                                    <li>Is New To Qualification: '.$enroll_data['isNew'].'</li>
                                    <li>PNumber: '.$enroll_data['pnumber'].'</li>
                                    <li>OpenCartID: '.$enroll_data['opencartId'].'</li>
                                    <li>UTM-Source: '.$enroll_data['utmSource'].'</li>
                                    <li>UTM-Medium: '.$enroll_data['utmMedium'].'</li>
                                    <li>UTM-Term: '.$enroll_data['utmTerm'].'</li>
                                    <li>UTM-Content: '.$enroll_data['utmContent'].'</li>
                                    <li>UTM-Campaign: '.$enroll_data['utmCampaign'].'</li>
                                    <li>Form Type: Enroll </li>
                                </ul>
                                </br>
                                <p>Geek details: </br> Debug Information: </p>
                                </br>
                                <u>
                                    <li>PDO Statement Execute returned false.</li>
                                    <li>PDO Error: '.$stmt->errorCode().'</li>
                                    <li>PDO Error Details: '.json_encode($stmt->errorInfo()).'</li>
                                </u>
                            ';

                            self::send_email_to_dev("Student", $lapis_category, "Failure", $firstName.' '.$lastName, $body);

                        }


                    }catch(PDOException $Exception){
                        $dbody = "Error: ";
                        $dbody .= "PDO Error during execution of LAPIS Query </br>";
                        $dbody .= "Error Message: ".$Exception->getMessage()."</br>";
                        $dbody .= "Error Code: ".(int)$Exception->getCode()."</br>";
                        $body = $firstName.' '.$lastName. '
                                <p>There was an error with sending data to Lapis. Student data is recovered:</p>
                                <ul>
                                    <li>First Name: '.$enroll_data['firstName'].'</li>
                                    <li>Last Name: '.$enroll_data['lastName'].'</li>
                                    <li>Gender: '.$enroll_data['gender'].'</li>
                                    <li>Country: '.$enroll_data['country'].'</li>
                                    <li>Email: '.$enroll_data['email'].'</li>
                                    <li>Phone: '.$enroll_data['phone'].'</li>
                                    <li>Birthday: '.$enroll_data['birthday'].'</li>
                                    <li>Qualification: '.$enroll_data['qualificationName'].'</li>
                                    <li>Additional Info: '.$enroll_data['additionalInfo'].'</li>
                                    <li>Is New To Qualification: '.$enroll_data['isNew'].'</li>
                                    <li>PNumber: '.$enroll_data['pnumber'].'</li>
                                    <li>OpenCartID: '.$enroll_data['opencartId'].'</li>
                                    <li>UTM-Source: '.$enroll_data['utmSource'].'</li>
                                    <li>UTM-Medium: '.$enroll_data['utmMedium'].'</li>
                                    <li>UTM-Term: '.$enroll_data['utmTerm'].'</li>
                                    <li>UTM-Content: '.$enroll_data['utmContent'].'</li>
                                    <li>UTM-Campaign: '.$enroll_data['utmCampaign'].'</li>
                                    <li>Form Type: Enroll </li>
                                </ul>
                                </br>
                                <p>Geek details: </br> Debug Information: </p>
                                </br>
                                '.$dbody.'
                            ';
                        self::send_email_to_dev("Student", $lapis_category, "Failure", $firstName.' '.$lastName, $body);
                    }
                }
            }else{ //If not lapis
                $exelixis_account = get_option('gt_settings_exelixis_account');
                if(strcmp($exelixis_account,"no") != 0){ //Exelixis not disabled
                    $user_id = $order->get_user_id();
                    $gender= get_user_meta( $user_id, 'user_gender', true );
                    switch ($gender){
                        case "male":
                            $gender = "M";
                            break;
                        case "female":
                            $gender = "F";
                            break;
                        case "other":
                            $gender = "O";
                            break;
                        default:
                            $gender="O";
                    }
                    $product = wc_get_product( $product_id );
                    $sku = $product->get_sku();
                    $this->exelixis_sync($order_id,$gender,$sku,$user_id);
                }
            }
        endforeach;
    }
}

/**
 * Send mail to lead has been disabled as emails are send from Ninja forms
 */
private static function send_email_to_lead($program, $location, $studentName, $studentEmail){
   $headers = array('Content-Type: text/html; charset=UTF-8');
   $logo_url = "https://moodle.globaltraining.org/pages/resources/global-training-logo-white.png";
   $sample_url = "http://globaltraining.org/sample/";
    if( $program == 'ACCA' && $location == 'romania'){
        $subject = "ACCA with Globaltraining";
        $body  = '
                    <!DOCTYPE html>
                    <html xmlns="http://www.w3.org/1999/xhtml">
                        <head>
                            <title>Globaltraining</title>
                            <style> @import url(http://fonts.googleapis.com/css?family=Lato:400,700,900); body { background-color: #fbfbfb; font-family: \'Lato\', sans-serif; margin: 0; font-size: 16px; color: #565656; line-height: 25px; } </style>
                        </head>
                        <body>
                            <div style="width:95%;max-width:364px;margin:20px auto;height:auto; background:#003a73">
                                <img src="'.$logo_url.'" style="width:100%" alt="Globaltraining" />
                            </div>
                            <div style="background:#fff;border:1px solid #e2e2e2;width:95%;max-width:550px;height:auto;margin:0 auto;">
                                <div style="margin:30px 25px 0 25px">
                                    <p>Dear '.$studentName.'</p> <p>Thank you for submitting your interest to study your ACCA qualification with Globaltraining. Our Student Support team will be in contact with you shortly.</p>
                                    <p>We are glad to offer you access to our <b>Sample Course Materials</b> - please <a href="'.$sample_url.'?region=Romania">click here</a> to view. </p>
                                    <br />
                                    <h2>Association of Chartered Certified Accountants (ACCA)</h2>
                                    <p>The Association of Chartered Certified Accountants (ACCA) is the largest and fastest-growing global professional accountancy body in the world. 
                                    The qualification is awarded after successful completion of fourteen ACCA examinations and three years of practical experience.</p>
                                    <p>The ACCA qualification is a passport to a new world of opportunity. ACCA is not only about accounting, you will also develop a range of skills and knowledge including finance, tax, law and management.</p>
                                    <br />
                                    <h2>Globaltraining</h2>
                                    <p>Globaltraining Romania is the premier professional training institute in Bucharest since 2007.</p>
                                    <p>Our students constantly exceed worldwide pass-rates and achieve international prizes. As a result of this the ACCA has approved us as a 
                                    Platinum Learning Partner - this is the highest level of recognition offered by the ACCA, awarded only to the very best tuition providers.</p>
                                    <br />
                                    <h2>Study Online and In Class</h2>
                                    <p>With Globaltraining Romania you have the option to study online, in class or through a blend of both.</p>
                                    <p>Globaltraining\'s Live Online study method allows you flexibility and affordability without compromising on quality.</p>
                                    <p>Our classroom courses are offered in modern, purpose-built premises in Bucharest, Grozavesti area. Top quality training can only be delivered in a top quality environment.</p>
                                    <br />
                                    <p>Kind Regards,</p>
                                    <br />
                                    <p>
                                        <b>The Globaltraining Team</b><br /> Tel: + 40 31 425 3663<br /> Fax: + 40 31 425 3662 
                                        <br /> Email: info.ro@globaltraining.org<br /> Address: 31A Economu Cezarescu Street, Sector 6, 060754, Bucharest - Romania
                                    </p>
                                </div>
                            </div>
                            <br />
                            <br />
                        </body>
                    </html>';;

                    wp_mail($studentEmail,$subject,$body,$headers);
    }else if($program == 'ACCA' && $location == 'southafrica'){
        $subject = "ACCA with Globaltraining";
        $body = '<!DOCTYPE html>
                <html xmlns="http://www.w3.org/1999/xhtml">
                    <head>
                        <title>Globaltraining</title>
                        <style></style>
                            @import url(http://fonts.googleapis.com/css?family=Lato:400,700,900);
                            body { background-color: #fbfbfb; font-family: \'Lato\', sans-serif; margin: 0; font-size: 16px; color: #565656; line-height: 25px; }
                        </style>
                    </head>
                    <body>
                        <div style="width:95%;max-width:364px;margin:20px auto;height:auto; background:#003a73">
                            <img src="'.$logo_url.'" style="width:100%" alt="Globaltraining" />
                        </div>
                        <div style="background:#fff;border:1px solid #e2e2e2;width:95%;max-width:550px;height:auto;margin:0 auto;">
                            <div style="margin:30px 25px 0 25px">
                                <p>Dear '.$studentName.',</p>
                                <p>
                                    Thank you for submitting your interest to study your ACCA qualification with Globaltraining.
                                    Our Student Support team will be in contact with you shortly.</p> <p>We are glad to offer you access to our
                                    <b>Sample Course Materials</b> - please <a href="'.$sample_url.'?region=SouthAfrica">click here</a> to view.
                                </p>
                                <br />
                                <h2>Association of Chartered Certified Accountants (ACCA)</h2>
                                <p>
                                    The Association of Chartered Certified Accountants (ACCA) is the largest and fastest-growing global professional accountancy body in the world. 
                                    The qualification is awarded after successful completion of fourteen ACCA examinations and three years of practical experience.
                                </p>
                                <p>The ACCA qualification is a passport to a new world of opportunity. ACCA is not only about accounting, you will also develop a range of skills and knowledge including finance, tax, law and management.</p>
                                <br />
                                <h2>Globaltraining</h2>
                                <p>
                                    Globaltraining has been approved by the ACCA as a Platinum Learning Partner - this is the highest level of recognition offered by the ACCA, awarded only to the very best tuition providers. 
                                    We have been operating for over 20 years, and have centres across Europe and Online.
                                </p> <br />
                                <h2>Studying Online</h2>
                                <p>
                                    Globaltraining\'s Live Online study method allows you flexibility and affordability without compromising on quality. 
                                    Our courses can be accessed via all devices (including tablets and mobile) and videos can be downloaded to reduce your need for internet-streaming.</p>
                                    <br /> <p>Kind Regards,</p><br />
                                    <p> <b>The Globaltraining Team</b><br /> Tel: +357 22 841 795<br /> Fax: +357 22 357 484<br /> Email: liveonline@globaltraining.org
                                    <br /> Address: 46, Makedonitissas Ave., P.O. Box 24005, 1700 Nicosia </p>
                            </div>
                        </div>
                        <br />
                        <br />
                    </body>
                </html>';
                wp_mail($studentEmail,$subject,$body,$headers);
    }else if($program == 'ACCA' && $location == 'africa'){
        $subject = "ACCA with Globaltraining";
        $body = '<!DOCTYPE html>
            <html xmlns="http://www.w3.org/1999/xhtml">
                <head>
                    <title>Globaltraining</title>
                    <style> @import url(http://fonts.googleapis.com/css?family=Lato:400,700,900); body { background-color: #fbfbfb; font-family: \'Lato\', sans-serif; margin: 0; font-size: 16px; color: #565656; line-height: 25px; } </style>
                </head>
                <body>
                    <div style="width:95%;max-width:364px;margin:20px auto;height:auto; background:#003a73">
                        <img src="'.$logo_url.'" style="width:100%" alt="Globaltraining" />
                    </div>
                    <div style="background:#fff;border:1px solid #e2e2e2;width:95%;max-width:550px;height:auto;margin:0 auto;">
                        <div style="margin:30px 25px 0 25px">
                            <p>Dear '.$studentName.',</p>
                            <p>Thank you for submitting your interest to study your ACCA qualification with Globaltraining. Our Student Support team will be in contact with you shortly.</p>
                            <p>We are glad to offer you access to our <b>Sample Course Materials</b> - please <a href="'.$sample_url.'?region=Africa">click here</a> to view. </p>
                            <br />
                            <h2>Association of Chartered Certified Accountants (ACCA)</h2>
                            <p>The Association of Chartered Certified Accountants (ACCA) is the largest and fastest-growing global professional accountancy body in the world.
                            The qualification is awarded after successful completion of fourteen ACCA examinations and three years of practical experience.</p>
                            <p>The ACCA qualification is a passport to a new world of opportunity. ACCA is not only about accounting, you will also develop a range of skills and knowledge including finance, tax, law and management.</p>
                            <br />
                            <h2>Globaltraining</h2>
                            <p>Globaltraining has been approved by the ACCA as a Platinum Learning Partner - this is the highest level of recognition offered by the ACCA, awarded only to the very best tuition providers. 
                            We have been operating for over 20 years, and have centres across Europe and Online.</p>
                            <br />
                            <h2>Studying Online</h2>
                            <p>Globaltraining\'s Live Online study method allows you flexibility and affordability without compromising on quality. 
                            Our courses can be accessed via all devices (including tablets and mobile) and videos can be downloaded to reduce your need for internet-streaming.</p>
                            <br />
                            <p>Kind Regards,</p><br /> <p> <b>The Globaltraining Team</b><br /> Tel: +357 22 841 795<br /> Fax: +357 22 357 484<br /> Email: liveonline@globaltraining.org<br /> Address: 46, Makedonitissas Ave., P.O. Box 24005, 1700 Nicosia </p>
                        </div>
                    </div>
                    <br />
                    <br />
                </body>
            </html>';
        wp_mail($studentEmail,$subject,$body,$headers);
    }else if($program == 'ACCA' && $location == 'all'){
        $subject = "ACCA with Globaltraining";
        $body = '<!DOCTYPE html>
                    <html xmlns="http://www.w3.org/1999/xhtml">
                    <head> <title>Globaltraining</title>
                        <style>
                            @import url(http://fonts.googleapis.com/css?family=Lato:400,700,900);
                            body { background-color: #fbfbfb; font-family: \'Lato\', sans-serif; margin: 0; font-size: 16px; color: #565656; line-height: 25px; }
                        </style>
                    </head>
                    <body>
                        <div style="width:95%;max-width:364px;margin:20px auto;height:auto; background:#003a73">
                            <img src="'.$logo_url.'" style="width:100%" alt="Globaltraining" />
                        </div>
                        <div style="background:#fff;border:1px solid #e2e2e2;width:95%;max-width:550px;height:auto;margin:0 auto;">
                        <div style="background:#fff;border:1px solid #e2e2e2;width:95%;max-width:550px;height:auto;margin:0 auto;"> 
                            <div style="margin:30px 25px 0 25px"> 
                                <p>Dear '.$studentName.',</p> 
                                <p>Thank you for submitting your interest to study your ACCA qualification with Globaltraining. 
                                Our Student Support team will be in contact with you shortly.</p> <p>We are glad to offer you access to our <b>Sample Course Materials</b> - please <a href="'.$sample_url.'">click here</a> to view. </p> 
                                <br /> <h2>Globaltraining</h2> 
                                <p>Globaltraining has been training students to become CEOs, CFOs, Entrepreneurs and more since 1991.</p> <p>Our students constantly exceed worldwide pass-rates and achieve international prizes. 
                                As a result of this the ACCA has approved us as a Platinum Learning Partner - this is the highest level of recognition offered by the ACCA, awarded only to the very best tuition providers.</p> 
                                <p>By studying with Globaltraining you increase your chances of passing your ACCA exams first time - saving you time and money!</p> <br /> <h2>Studying Online</h2> 
                                <p>Globaltraining\'s Live Online study method allows you flexibility and affordability without compromising on quality.</p> 
                                <p>Just a few benefits of studying with Globaltraining Online are:</p> <ul> <li>Study online - Anywhere, Anytime</li> 
                                <li>Download materials to work offline</li> <li>Access videos via all devices, including tablet and mobile</li> 
                                <li>Pay in manageable installments</li> </ul>  <br /> <p>Kind Regards,</p><br /> 
                                <p> <b>The Globaltraining Team</b>
                                <br />Tel: +357 22 841 795<br /> Fax: +357 22 357 484<br /> Email: liveonline@globaltraining.org<br /> Address: 46, Makedonitissas Ave., P.O. Box 24005, 1700 Nicosia </p> 
                            </div>
                        </div>
                        <br />
                        <br />
                    </body>
                </html>';

        wp_mail($studentEmail,$subject,$body,$headers);
    }else if($program == 'DipIFR' && $location == 'romania'){
        $subject = 'DipIFR with Globaltraining';
        $body = '<!DOCTYPE html>
                    <html xmlns="http://www.w3.org/1999/xhtml">
                        <head> <title>Globaltraining</title>
                            <style>
                                @import url(http://fonts.googleapis.com/css?family=Lato:400,700,900);
                                body { background-color: #fbfbfb; font-family: \'Lato\', sans-serif; margin: 0; font-size: 16px; color: #565656; line-height: 25px; }
                            </style>
                        </head>
                        <body>
                            <div style="width:95%;max-width:364px;margin:20px auto;height:auto; background:#003a73">
                                <img src="'.$logo_url.'" style="width:100%" alt="Globaltraining" />
                            </div>
                            <div style="background:#fff;border:1px solid #e2e2e2;width:95%;max-width:550px;height:auto;margin:0 auto;">
                                <div style="margin:30px 25px 0 25px">
                                    <p>Dear '.$studentName.',</p>
                                    <p>Thank you for submitting your interest to study your DipIFR qualification with Globaltraining. Our Student Support team will be in contact with you shortly.</p>
                                    <p>To learn more, please watch our <a href="https://www.youtube.com/watch?v=oCAwq4xcZOo"><b>Demo Video</b></a> to see how our online courses work.</p>
                                    <br />
                                    <h2>Diploma in IFRS</h2>
                                    <p>The Diploma in International Financial Reporting Standards (DipIFRS) is a diploma offered by the ACCA (the largest and fastest-growing accountancy body in the world). 
                                    The qualification provides finance professionals with a working knowledge of International Financial Reporting Standards and will develop your knowledge, understanding and application of the standards.</p>
                                    <br />
                                    <h2>Apply Online</h2>
                                    <p>In order to be eligible to attempt the DipIFR exam you need to be a professional accountant or auditor who works in practice or business, and are qualified according to national accounting standards, 
                                    or you will need to prove that you have one of the following:</p>
                                    <ul>
                                        <li>three years\' relevant accounting experience (by submitting a letter from your employer)</li>
                                        <li>a relevant degree plus two years\' work experience</li>
                                        <li>an ACCA Certificate in International Financial Reporting plus two years\' work experience.</li>
                                    </ul>
                                    <p>If you meet the above criteria you can apply online via the ACCA website. Online applications must be received at least 10 days before the following closing dates:</p>
                                    <ul>
                                        <li>8 April for the June exam session</li>
                                        <li>8 October for the December exam session</li>
                                    </ul>
                                    <br />
                                    <h2>Tuition Fees</h2>
                                    <p>When you register online you will be required to pay the ACCA an initial registration fee of 211 pounds (for June 2015 exam). 
                                    This fee includes one exam attempt. A further fee is charged for any re-sit.</p> <p>The tuition fees for studying the DipIFR with Globaltraining are 1,000 euro, 
                                    but for a limited period only you can receive a 250 euro discount!</p> <p>In the unlikely event you fail the exam, you will be given the course again for free - as many times as you need - as long as you:</p> 
                                    <ul>
                                        <li>Attend, or watch later, at least 90% of the online lectures</li>
                                        <li>Attempt practice exams given by your lecturer</li>
                                        <li>Attempt the final exam.</li>
                                    </ul>
                                    <br />
                                    <h2>Timetable</h2>
                                    <p>The course will begin on 25th February 2015, and will involve 14 tuition lectures (42 hours) and 3 revision lectures (9 hours).</p>
                                    <p>This course will run fully online allowing you flexibility and affordability without compromising on quality. 
                                    The week before the course starts you will be provided with a login for your personal online learning platform where you will have access to comprehensive study materials, engaging quizzes, 
                                    interactive lectures, recorded lectures and additional information. Before each lecture you will be provided with a password to log into our live lectures where you will be able to see, 
                                    hear and interact with the lecturer - just like in class.</p> <p>To see briefly how our online courses work please watch our <a href="https://www.youtube.com/watch?v=oCAwq4xcZOo">Demo Video</a>.</p>
                                    <p>The final exam will take place on 9th June 2015, and the results will be released electronically on 8th August 2015.</p>
                                    <br />
                                    <p>Kind Regards,</p><br /> 
                                    <p> <b>The Globaltraining Team</b><br /> Tel: +357 22 841 795<br /> Fax: +357 22 357 484<br /> Email: liveonline@globaltraining.org<br /> Address: 46, Makedonitissas Ave., P.O. Box 24005, 1700 Nicosia<br />
                                    </p>
                                </div>
                            </div>
                            <br />
                            <br />
                        </body>
                    </html>';
                    wp_mail($studentEmail,$subject,$body,$headers);
    }else if($program == 'DipIFR' && $location == 'africa'){
        $subject = 'DipIFR with Globaltraining';
        $body = '<!DOCTYPE html>
                    <html xmlns="http://www.w3.org/1999/xhtml">
                    <head>
                        <title>Globaltraining</title>
                        <style> 
                            @import url(http://fonts.googleapis.com/css?family=Lato:400,700,900); body { background-color: #fbfbfb; font-family: \'Lato\', sans-serif; margin: 0; font-size: 16px; color: #565656; line-height: 25px; }
                        </style>
                    </head>
                    <body>
                        <div style="width:95%;max-width:364px;margin:20px auto;height:auto; background:#003a73">
                            <img src="'.$logo_url.'" style="width:100%" alt="Globaltraining" />
                        </div>
                        <div style="background:#fff;border:1px solid #e2e2e2;width:95%;max-width:550px;height:auto;margin:0 auto;">
                            <div style="margin:30px 25px 0 25px">
                                <p>Dear '.$studentName.',</p>
                                <p>Thank you for submitting your interest to study your DipIFR qualification with Globaltraining. Our Student Support team will be in contact with you shortly.</p>
                                <p>To learn more, please watch our <a href="https://www.youtube.com/watch?v=oCAwq4xcZOo"><b>Demo Video</b></a> to see how our online courses work.</p>
                                <br />
                                <h2>Diploma in IFRS</h2>
                                <p>The Diploma in International Financial Reporting Standards (DipIFRS) is a diploma offered by the ACCA (the largest and fastest-growing accountancy body in the world). 
                                The qualification provides finance professionals with a working knowledge of International Financial Reporting Standards and will develop your knowledge, understanding and application of the standards.</p>
                                <br />
                                <h2>Apply Online</h2>
                                <p>In order to be eligible to attempt the DipIFR exam you need to be a professional accountant or auditor who works in practice or business, and are qualified according to national accounting standards, 
                                or you will need to prove that you have one of the following:</p>
                                <ul>
                                    <li>three years\' relevant accounting experience (by submitting a letter from your employer)</li>
                                    <li>a relevant degree plus two years\' work experience</li>
                                    <li>an ACCA Certificate in International Financial Reporting plus two years\' work experience.</li>
                                </ul>
                                <p>If you meet the above criteria you can apply online via the ACCA website. Online applications must be received at least 10 days before the following closing dates:</p>
                                <ul>
                                    <li>8 April for the June exam session</li>
                                    <li>8 October for the December exam session</li>
                                </ul>
                                <br />
                                <h2>Tuition Fees</h2>
                                <p>When you register online you will be required to pay the ACCA an initial registration fee of 211 pounds (for June 2015 exam). This fee includes one exam attempt. 
                                A further fee is charged for any re-sit.</p> <p>The tuition fees for studying the DipIFR with Globaltraining are 1,000 euro, but for a limited period only you can receive a 250 euro discount!</p>
                                <p>In the unlikely event you fail the exam, you will be given the course again for free - as many times as you need - as long as you:</p>
                                <ul>
                                    <li>Attend, or watch later, at least 90% of the online lectures</li>
                                    <li>Attempt practice exams given by your lecturer</li>
                                    <li>Attempt the final exam.</li>
                                </ul>
                                <br />
                                <h2>Timetable</h2>
                                <p>The course will begin on 25th February 2015, and will involve 14 tuition lectures (42 hours) and 3 revision lectures (9 hours).</p>
                                <p>This course will run fully online allowing you flexibility and affordability without compromising on quality. 
                                The week before the course starts you will be provided with a login for your personal online learning platform where you will have access to comprehensive study materials, engaging quizzes, 
                                interactive lectures, recorded lectures and additional information. Before each lecture you will be provided with a password to log into our live lectures where you will be able to see, hear and interact 
                                with the lecturer - just like in class.</p> <p>To see briefly how our online courses work please watch our <a href="https://www.youtube.com/watch?v=oCAwq4xcZOo">Demo Video</a>.</p>
                                <p>The final exam will take place on 9th June 2015, and the results will be released electronically on 8th August 2015.</p>
                                <br />
                                <p>Kind Regards,</p><br />
                                <p> <b>The Globaltraining Team</b><br /> Tel: +357 22 841 795<br /> Fax: +357 22 357 484<br /> Email: liveonline@globaltraining.org<br /> Address: 46, Makedonitissas Ave., P.O. Box 24005, 1700 Nicosia<br /> </p>
                            </div>
                        </div>
                        <br />
                        <br />
                    </body>
                </html>';
        wp_mail($studentEmail,$subject,$body,$headers);
    }else if($program == 'DipIFR' && $location == 'southafrica'){
        $subject = 'DipIFR with Globaltraining';
        $body = '<!DOCTYPE html>
            <html xmlns="http://www.w3.org/1999/xhtml">
                <head>
                    <title>Globaltraining</title>
                    <style> @import url(http://fonts.googleapis.com/css?family=Lato:400,700,900); body { background-color: #fbfbfb; font-family: \'Lato\', sans-serif; margin: 0; font-size: 16px; color: #565656; line-height: 25px; } </style>
                </head>
                <body>
                    <div style="width:95%;max-width:364px;margin:20px auto;height:auto; background:#003a73">
                        <img src="'.$logo_url.'" style="width:100%" alt="Globaltraining" />
                    </div>
                    <div style="background:#fff;border:1px solid #e2e2e2;width:95%;max-width:550px;height:auto;margin:0 auto;">
                        <div style="margin:30px 25px 0 25px">
                            <p>Dear '.$studentName.',</p>
                            <p>Thank you for submitting your interest to study your DipIFR qualification with Globaltraining. Our Student Support team will be in contact with you shortly.</p>
                            <p>To learn more, please watch our <a href="https://www.youtube.com/watch?v=oCAwq4xcZOo"><b>Demo Video</b></a> to see how our online courses work.</p>
                            <br />
                            <h2>Diploma in IFRS</h2>
                            <p>The Diploma in International Financial Reporting Standards (DipIFRS) is a diploma offered by the ACCA (the largest and fastest-growing accountancy body in the world). 
                            The qualification provides finance professionals with a working knowledge of International Financial Reporting Standards and will develop your knowledge, understanding and application of the standards.</p>
                            <br />
                            <h2>Apply Online</h2>
                            <p>In order to be eligible to attempt the DipIFR exam you need to be a professional accountant or auditor who works in practice or business, and are qualified according to national accounting standards, 
                            or you will need to prove that you have one of the following:</p>
                            <ul>
                                <li>three years\' relevant accounting experience (by submitting a letter from your employer)</li>
                                <li>a relevant degree plus two years\' work experience</li>
                                <li>an ACCA Certificate in International Financial Reporting plus two years\' work experience.</li>
                            </ul>
                            <p>If you meet the above criteria you can apply online via the ACCA website. Online applications must be received at least 10 days before the following closing dates:</p>
                            <ul>
                                <li>8 April for the June exam session</li>
                                <li>8 October for the December exam session</li>
                            </ul>
                            <br />
                            <h2>Tuition Fees</h2>
                            <p>When you register online you will be required to pay the ACCA an initial registration fee of 211 pounds (for June 2015 exam). This fee includes one exam attempt. 
                            A further fee is charged for any re-sit.</p> <p>The tuition fees for studying the DipIFR with Globaltraining are 1,000 euro, but for a limited period only you can receive a 250 euro discount!</p>
                            <p>In the unlikely event you fail the exam, you will be given the course again for free - as many times as you need - as long as you:</p>
                            <ul>
                                <li>Attend, or watch later, at least 90% of the online lectures</li>
                                <li>Attempt practice exams given by your lecturer</li>
                                <li>Attempt the final exam.</li>
                            </ul>
                            <br />
                            <h2>Timetable</h2>
                            <p>The course will begin on 25th February 2015, and will involve 14 tuition lectures (42 hours) and 3 revision lectures (9 hours).</p>
                            <p>This course will run fully online allowing you flexibility and affordability without compromising on quality. 
                            The week before the course starts you will be provided with a login for your personal online learning platform where you will have access to comprehensive study materials, engaging quizzes, 
                            interactive lectures, recorded lectures and additional information. Before each lecture you will be provided with a password to log into our live lectures where you will be able to see, hear and interact with the lecturer 
                            - just like in class.</p> <p>To see briefly how our online courses work please watch our <a href="https://www.youtube.com/watch?v=oCAwq4xcZOo">Demo Video</a>.</p>
                            <p>The final exam will take place on 9th June 2015, and the results will be released electronically on 8th August 2015.</p> <br /> <p>Kind Regards,</p>
                            <br />
                            <p> <b>The Globaltraining Team</b><br /> Tel: +357 22 841 795<br /> Fax: +357 22 357 484<br /> Email: liveonline@globaltraining.org<br /> Address: 46, Makedonitissas Ave., P.O. Box 24005, 1700 Nicosia<br /> </p>
                        </div>
                    </div>
                    <br />
                    <br />
                </body>
            </html>';
        wp_mail($studentEmail,$subject,$body,$headers);
    }else if($program == 'DipIFR' && $location == 'all'){
        $subject = 'DipIFR with Globaltraining';
        $body = '<!DOCTYPE html>
                    <html xmlns="http://www.w3.org/1999/xhtml">
                    <head>
                        <title>Globaltraining</title>
                        <style> @import url(http://fonts.googleapis.com/css?family=Lato:400,700,900); body { background-color: #fbfbfb; font-family: \'Lato\', sans-serif; margin: 0; font-size: 16px; color: #565656; line-height: 25px; } </style>
                    </head>
                    <body>
                        <div style="width:95%;max-width:364px;margin:20px auto;height:auto; background:#003a73">
                            <img src="'.$logo_url.'" style="width:100%" alt="Globaltraining" />
                        </div>
                        <div style="background:#fff;border:1px solid #e2e2e2;width:95%;max-width:550px;height:auto;margin:0 auto;">
                            <div style="margin:30px 25px 0 25px">
                                <p>Dear '.$studentName.',</p>
                                <p>Thank you for submitting your interest to study your DipIFR qualification with Globaltraining. Our Student Support team will be in contact with you shortly.</p>
                                <p>To learn more, please watch our <a href="https://www.youtube.com/watch?v=oCAwq4xcZOo"><b>Demo Video</b></a> to see how our online courses work.</p>
                                <br />
                                <h2>Diploma in IFRS</h2>
                                <p>The Diploma in International Financial Reporting Standards (DipIFRS) is a diploma offered by the ACCA (the largest and fastest-growing accountancy body in the world). 
                                The qualification provides finance professionals with a working knowledge of International Financial Reporting Standards and will develop your knowledge, understanding and application of the standards.</p>
                                <br />
                                <h2>Apply Online</h2>
                                <p>In order to be eligible to attempt the DipIFR exam you need to be a professional accountant or auditor who works in practice or business, and are qualified according to national accounting standards, 
                                or you will need to prove that you have one of the following:</p>
                                <ul>
                                    <li>three years\' relevant accounting experience (by submitting a letter from your employer)</li>
                                    <li>a relevant degree plus two years\' work experience</li> <li>an ACCA Certificate in International Financial Reporting plus two years\' work experience.</li>
                                </ul>
                                <p>If you meet the above criteria you can apply online via the ACCA website. Online applications must be received at least 10 days before the following closing dates:</p>
                                <ul>
                                    <li>8 April for the June exam session</li>
                                    <li>8 October for the December exam session</li>
                                </ul>
                                <br />
                                <h2>Tuition Fees</h2>
                                <p>When you register online you will be required to pay the ACCA an initial registration fee of 211 pounds (for June 2015 exam). This fee includes one exam attempt. 
                                A further fee is charged for any re-sit.</p> <p>The tuition fees for studying the DipIFR with Globaltraining are 1,000 euro.</p>
                                <p>In the unlikely event you fail the exam, you will be given the course again for free - as many times as you need - as long as you:</p>
                                <ul>
                                    <li>Attend, or watch later, at least 90% of the online lectures</li>
                                    <li>Attempt practice exams given by your lecturer</li>
                                    <li>Attempt the final exam.</li>
                                </ul>
                                <br />
                                <h2>Timetable</h2>
                                <p>The course will begin on 25th February 2015, and will involve 14 tuition lectures (42 hours) and 3 revision lectures (9 hours).</p>
                                <p>This course will run fully online allowing you flexibility and affordability without compromising on quality. The week before the course starts you will be provided with a login for your personal online 
                                learning platform where you will have access to comprehensive study materials, engaging quizzes, interactive lectures, recorded lectures and additional information. 
                                Before each lecture you will be provided with a password to log into our live lectures where you will be able to see, hear and interact with the lecturer - just like in class.</p>
                                <p>To see briefly how our online courses work please watch our <a href="https://www.youtube.com/watch?v=oCAwq4xcZOo">Demo Video</a>.</p>
                                <p>The final exam will take place on 9th June 2015, and the results will be released electronically on 8th August 2015.</p>
                                <p>Kind Regards,</p><br /> <p> <b>The Globaltraining Team</b>
                                <br /> Tel: +357 22 841 795<br /> Fax: +357 22 357 484<br /> Email: liveonline@globaltraining.org
                                <br /> Address: 46, Makedonitissas Ave., P.O. Box 24005, 1700 Nicosia </p>
                            </div>
                        </div>
                        <br />
                        <br />
                    </body>
                </html>';
        wp_mail($studentEmail,$subject,$body,$headers);
    }else if($program == 'MBA (Marymount University)'){
        $subject ='MBA (Marymount University) with Globaltraining';
        $body = '<!DOCTYPE html>
                    <html xmlns=http://www.w3.org/1999/xhtml>
                    <head>
                        <title>Globaltraining</title>
                        <style>@import url(http://fonts.googleapis.com/css?family=Lato:400,700,900);body{background-color:#fbfbfb;font-family:\'Lato\',sans-serif;margin:0;font-size:16px;color:#565656;line-height:25px}</style>
                    </head>
                    <div style="width:95%;max-width:364px;margin:20px auto;height:auto; background:#003a73">
                        <img src="'.$logo_url.'" style="width:100%"" alt="Globaltraining">
                    </div>
                    <div style="background:#fff;border:1px solid #e2e2e2;width:95%;max-width:550px;height:auto;margin:0 auto">
                        <div style="margin:30px 25px 0 25px"><img src="http://online.globaltraining.org/img/email-mba-header.jpg" style="width:100%;max-width:500px">
                            <p>Dear '.$studentName.',</p>
                            <p>Thank you for your interest in the MBA programs delivered by Globaltraining. Within the next 48 hours, you will be allocated a student advisor, who will establish contact with you. In the meantime, 
                            please find below more information regarding the <strong>MBA program offered by Marymount California University (MCU MBA)</strong>.<p>The MCU MBA program is delivered 
                            <strong>fully online or blended</strong> (online and in class), through Globaltraining as the Local Support Centre in Romania. Unless you are currently based in Romania, 
                            or you are travelling to Romania frequently, we recommend you attend the courses fully online.
                            <p>In the blended format, the same online classes are enhanced with workshops which take place face to face, in class, in Bucharest, Romania – the current structure of the programme includes 11 such weekends (Saturday and Sunday) 
                            of traditional classroom-based courses in Bucharest, spread out on a period of approximately 2 years (which is also the total duration of the programme).<p>
                            <a href=http://www.marymountcaliforniauniversity-online.com/the-mba-program/ >Click here</a> for more information on the curriculum covered within the <strong>15 modules</strong>.
                            <p>Enrolments are rolling, so <strong>you can enrol anytime</strong> and start as soon as a module is available (which happens, at most, every other month) provided the admission requirements are met. <strong>Scholarships</strong> 
                            are also available throughout the year, <strong>for students from all over the world</strong>, through UNICAF. Your student advisor will provide you with more details.<p>Wishing you a wonderful MBA experience!</p>
                            <br>
                            <p>Kind regards,<p>Globaltraining – Romania Local Support Centre for Marymount California University Online MBA
                        </div>
                    </div>
                    <br>
                    <br>';
    }else{
        $subject='Study with Globaltraining';
        $body = '<!DOCTYPE html>
                    <html xmlns=http://www.w3.org/1999/xhtml>
                        <head>
                            <title>Globaltraining</title>
                            <style>@import url(http://fonts.googleapis.com/css?family=Lato:400,700,900);body{background-color:#fbfbfb;font-family:\'Lato\',sans-serif;margin:0;font-size:16px;color:#565656;line-height:25px}</style>
                        </head>
                        <body>
                            <div style="width:95%;max-width:364px;margin:20px auto;height:auto; background:#003a73">
                                <img src="'.$logo_url.'" style="width:100%"" alt="Globaltraining">
                            </div>
                            <div style="background:#fff;border:1px solid #e2e2e2;width:95%;max-width:600px;height:auto;margin:0 auto">
                                <div style="margin:30px 25px 0 25px">
                                    <p>Dear '.$studentName.',</p>
                                    <p>Thank you for submitting your interest to study your '.$program.' program with Globaltraining. 
                                    Our Student Support team will be in contact with you within the next 3 working days and provide you with further information on the program.</p>
                                    <p>Kind Regards,</p>
                                    <br>
                                    <p>
                                        <b>The Globaltraining Team</b><br></p><p><b>For Online courses</b><br>Tel: +357 22 841 795<br>Fax: +357 22 357 484<br>Email: liveonline@globaltraining.org
                                        <br>Address: 46, Makedonitissas Ave., P.O. Box 24005, 1700 Nicosia</p><br><p><b>For Classroom courses- Nicosia</b><br><b>Chara Loizou</b>
                                        <br>Tel: +357 22 841 665<br>Fax: +357 22 357 484<br>Email: loizou.c@globaltraining.org<br>Address: Address: 46, Makedonitissas Ave., P.O. Box 24005, 1700 Nicosia</p><br>
                                    <p><b>For Classroom courses - Limassol</b><br><b>Ms Marina Christodoulou</b>
                                    <br>Tel: +357 25 383 682<br>Email: christodoulou.m@globaltraining.org<br>Address: 92, Ayias Phylaxeos Street, P.O. Box 51604, 3507 Limassol</p>
                                    <br><p><b>For Romania</b><br><b>Ms Tamara Andrian</b><br>Tel: +40 31 425 3663<br>Email: andrian.t@globaltraining.org<br>Address: 31A Economu Cezarescu Street, Sector 6, 060754, Bucharest, Romania</p>
                                    <br><p><b>For Greece</b><br><b>Ms. Christiana Michaelidou</b><br>Tel: +30 210 6722868<br>Fax: +30 210 672 629
                                    <br>Email: michaelidou.c@globaltraining.org<br>Address: 265 Mesogeion Ave, Neo Psichico, 15451 Athens Greece</p>
                                </div>
                            </div>
                            <br>
                            <br>';
        wp_mail($studentEmail,$subject,$body,$headers);
    }
}

private static function send_email_to_enrolled_student($program, $location, $studentName, $studentEmail){
    $headers = array('Content-Type: text/html; charset=UTF-8');
    $logo_url = "https://moodle.globaltraining.org/pages/resources/global-training-logo-white.png";
    if($program == 'ACCA' && $location == 'romania'){
        $subject='Your ACCA Enrollment with Globaltraining';
        $body='<!DOCTYPE html>
                    <html xmlns="http://www.w3.org/1999/xhtml">
                        <head>
                            <title>Globaltraining</title>
                            <style> @import url(http://fonts.googleapis.com/css?family=Lato:400,700,900); body { background-color: #fbfbfb; font-family: \'Lato\', sans-serif; margin: 0; font-size: 16px; color: #565656; line-height: 25px; } </style>
                        </head>
                        <body>
                            <div style="width:95%;max-width:364px;margin:20px auto;height:auto">
                                <img src="'.$logo_url.'" style="width:100%" alt="Globaltraining" />
                            </div>
                            <div style="background:#fff;border:1px solid #e2e2e2;width:95%;max-width:600px;height:auto;margin:0 auto;">
                                <div style="margin:30px 25px 0 25px">
                                    <p>Dear '.$studentName.',</p>
                                    <p>Thank you for submitting your enrollment form to study your ACCA qualification with Globaltraining. Our Student Support team is reviewing your form and will be in contact shortly.</p> <p>In order to confirm your 
                                    registration you will be required to pay a non-refundable deposit to Globaltraining of 79 euro - this is to cover Globaltraining\'s administration expenses and will be deducted from your total tuition fees. 
                                    If you are purchasing e-materials the deposit covers the total cost of the course and you will not be required to make any further payments.
                                    </p>
                                    <p>Alternatively, if you pay all your fees up-front you will be granted a further 10% discount.</p>
                                    <br />
                                    <h2>Payment Methods</h2>
                                    <p>You may pay your Globaltraining fees via Bank Transfer.</p>
                                    <br />
                                    <br />
                                    <p><b>Bank:</b> Banca Transilvania</p>
                                    <p><b>Account Name:</b> Intercollege Global Training Romania</p><p><b>BIC/SWIFT: </b> BTRL RO22XXX</p>
                                    <p><b>IBAN: </b> RO82BTRLRONCRT0212201201 for payments in RON or RO32BTRLEURCRT0212201201 for payments in EURO</p>
                                    <p>We look forward to having you as part of the Globaltraining Student Community.</p>
                                    <p>Kind Regards,</p>
                                    <br />
                                    <p> <b>The Globaltraining Team</b><br /> Tel: +4021 312 88 11/ +4031 425 36 63 <br /> Fax: +4031 425 36 62<br /> Email: info.ro@globaltraining.org 
                                    <br /> Address: 31A Economu Cezarescu Street, 6th District, 060754 Bucharest, Romania</p>
                                </div>
                            </div>
                            <br />
                            <br />
                        </body>
                    </html>';
        wp_mail($studentEmail,$subject,$body,$headers);
    }else if($program == 'DipIFR' && $location == 'romania'){
        $subject='Your DipIFR Enrollment with Globaltraining';
        $body='<!DOCTYPE html>
                <html xmlns="http://www.w3.org/1999/xhtml">
                    <head>
                        <title>Globaltraining</title>
                        <style> @import url(http://fonts.googleapis.com/css?family=Lato:400,700,900); body { background-color: #fbfbfb; font-family: \'Lato\', sans-serif; margin: 0; font-size: 16px; color: #565656; line-height: 25px; } </style>
                    </head>
                    <body>
                        <div style="width:95%;max-width:364px;margin:20px auto;height:auto">
                            <img src="'.$logo_url.'" style="width:100%" alt="Globaltraining" />
                        </div>
                        <div style="background:#fff;border:1px solid #e2e2e2;width:95%;max-width:600px;height:auto;margin:0 auto;">
                            <div style="margin:30px 25px 0 25px">
                                <p>Dear '.$studentName.',</p>
                                <p>Thank you for submitting your enrollment form to study your DipIFR qualification with Globaltraining. Our Student Support team is reviewing your form and will be in contact shortly.</p>
                                <p>In order to confirm your registration you will be required to pay a non-refundable deposit to Globaltraining of 79 euro - this is to cover Globaltraining\'s administration expenses and will be deducted from your total tuition fees. 
                                If you are purchasing e-materials the deposit covers the total cost of the course and you will not be required to make any further payments.</p>
                                <br />
                                <h2>Payment Methods</h2>
                                <p>You may pay your Globaltraining fees via Bank Transfer.</p>
                                <br />
                                <p><b>Bank: </b>Banca Transilvania</p> <p><b>Account Name: </b>Intercollege Global Training Romania</p><p><b>BIC/SWIFT: </b> BTRL RO22XXX</p> 
                                <p><b>IBAN: </b> RO82BTRLRONCRT0212201201 for payments in RON or RO32BTRLEURCRT0212201201 for payments in EURO</p>
                                <p> We look forward to having you as part of the Globaltraining Student Community.</p> <br />
                                <p>Kind Regards,</p> <br />
                                <p> <b>The Globaltraining Team</b>
                                <br /> Tel: +4021 312 88 11/ +4031 425 36 63<br /> Fax: +4031 425 36 62
                                <br /> Email: info.ro@globaltraining.org
                                <br /> Address: 31A Economu Cezarescu Street, 6th District, 060754 Bucharest, Romania </p>
                            </div>
                        </div>
                        <br />
                        <br />
                    </body>
                </html>';
        wp_mail($studentEmail,$subject,$body,$headers);
    }else if ($program == 'ACCA'){
        $subject= 'Your ACCA Enrollment with Globaltraining';
        $body= '<!DOCTYPE html>
                    <html xmlns="http://www.w3.org/1999/xhtml">
                        <head>
                            <title>Globaltraining</title>
                            <style> @import url(http://fonts.googleapis.com/css?family=Lato:400,700,900); body { background-color: #fbfbfb; font-family: \'Lato\', sans-serif; margin: 0; font-size: 16px; color: #565656; line-height: 25px; } </style>
                        </head>
                        <body>
                            <div style="width:95%;max-width:364px;margin:20px auto;height:auto">
                                <img src="'.$logo_url.'" style="width:100%" alt="Globaltraining" />
                            </div>
                            <div style="background:#fff;border:1px solid #e2e2e2;width:95%;max-width:600px;height:auto;margin:0 auto;">
                                <div style="margin:30px 25px 0 25px">
                                    <p>Dear '.$studentName.',</p>
                                    <p>Thank you for submitting your enrollment form to study your ACCA qualification with Globaltraining. Our Student Support team is reviewing your form and will be in contact shortly.</p>
                                    <p>In order to confirm your registration you will be required to pay a non-refundable deposit to Globaltraining of 79 euro - this is to cover Globaltraining\'s administration expenses and will be deducted from your total tuition fees. 
                                    If you are purchasing e-materials the deposit covers the total cost of the course and you will not be required to make any further payments.</p> <p>Alternatively, if you pay all your fees up-front you will be granted a further 10% discount.</p>
                                    <br />
                                    <h2>Payment Methods</h2>
                                    <p>You may pay your Globaltraining fees via Bank Transfer or Debit/Credit Card through JCC (a secure online payment system).</p>
                                    <br />
                                    <h2>Debit/Credit Card</h2>
                                    <ol type="1">
                                        <li>Visit the internet site www.jccsmart.com - Click on &quot;Popular Categories&quot; click on Academic - Tuition Fees</li>
                                        <li>Click on University of Nicosia - Intercollege Nicosia</li>
                                        <li>Go to the section titled &quot;ACCA, ACA and Training Seminars&quot; and Click &quot;Please click here to pay invoice&quot;</li>
                                        <li>Enter your login details, or create an &quot;New Customer&quot; account</li>
                                        <li>Enter your Globaltraining Student ID (to be provided), Last Name, First Name and Amount you wish to settle, as indicated</li>
                                        <li>Enter the credit card information required</li>
                                    </ol>
                                    <br />
                                    <h2>Bank Transfer</h2>
                                    <p><b>Bank: </b>Hellenic Bank</p>
                                    <p><b>Account Name:</b> EDEX - Educational Excellence Corporation Ltd Account</p>
                                    <p><b>Number: </b> 119-01-567831-01</p> <p><b>BIC/SWIFT: </b> HEBACY2N</p> <p><b>IBAN: </b> CY15005001190001190156783101</p>
                                    <p>We look forward to having you as part of the Globaltraining Student Community.</p>
                                    <p>Kind Regards,</p>
                                    <br />
                                    <p> <b>The Globaltraining Team</b><br /> Tel: +357 22 841 795<br /> Fax: +357 22 357 484<br /> Email: liveonline@globaltraining.org
                                    <br /> Address: 46, Makedonitissas Ave., P.O. Box 24005, 1700 Nicosia </p>
                                </div>
                            </div>
                            <br />
                            <br />
                        </body>
                    </html>';
        wp_mail($studentEmail,$subject,$body,$headers);
    }else if($program == 'DipIFR'){
        $subject= 'Your DipIFR Enrollment with Globaltraining';
        $body='<!DOCTYPE html>
                <html xmlns="http://www.w3.org/1999/xhtml">
                    <head>
                        <title>Globaltraining</title>
                        <style> @import url(http://fonts.googleapis.com/css?family=Lato:400,700,900); body { background-color: #fbfbfb; font-family: \'Lato\', sans-serif; margin: 0; font-size: 16px; color: #565656; line-height: 25px; } </style>
                    </head>
                    <body>
                        <div style="width:95%;max-width:364px;margin:20px auto;height:auto">
                            <img src="'.$logo_url.'" style="width:100%" alt="Globaltraining" />
                        </div>
                        <div style="background:#fff;border:1px solid #e2e2e2;width:95%;max-width:600px;height:auto;margin:0 auto;">
                            <div style="margin:30px 25px 0 25px">
                                <p>Dear '.$studentName.',</p>
                                <p>Thank you for submitting your enrollment form to study your DipIFR qualification with Globaltraining. Our Student Support team is reviewing your form and will be in contact shortly.</p>
                                <p>In order to confirm your registration you will be required to pay a non-refundable deposit to Globaltraining of 79 euro - this is to cover Globaltraining\'s administration expenses and will be deducted from your total tuition fees. 
                                If you are purchasing e-materials the deposit covers the total cost of the course and you will not be required to make any further payments.</p>
                                <br />
                                <h2>Payment Methods</h2>
                                <p>You may pay your Globaltraining fees via Bank Transfer or Debit/Credit Card through JCC (a secure online payment system).</p>
                                <br />
                                <h2>1. Debit/Credit Card</h2>
                                    <ol>
                                        <li>Visit the internet site www.jccsmart.com - Click on &quot;Popular Categories&quot; click on Academic - Tuition Fees</li>
                                        <li>Click on University of Nicosia - Intercollege Nicosia</li>
                                        <li>Go to the section titled &quot;ACCA, ACA and Training Seminars&quot; and Click &quot;Please click here to pay invoice&quot;</li>
                                        <li>Enter your login details, or create an &quot;New Customer&quot; account</li>
                                        <li>Enter your Globaltraining Student ID (to be provided), Last Name, First Name and Amount you wish to settle, as indicated</li>
                                        <li>Enter the credit card information required</li>
                                    </ol>
                                    <br />
                                <h2>2. Bank Transfer</h2>
                                    <p><b>Bank: </b>Hellenic Bank</p>
                                    <p><b>Account Name: </b>EDEX - Educational Excellence Corporation Ltd Account</p>
                                    <p><b>Number: </b>119-01-567831-01</p>
                                    <p><b>BIC/SWIFT: </b> HEBACY2N</p>
                                    <p><b>IBAN: </b> CY15005001190001190156783101</p>
                                    <p> We look forward to having you as part of the Globaltraining Student Community.</p>
                                    <br />
                                    <p>Kind Regards,</p>
                                    <br />
                                    <p> <b>The Globaltraining Team</b><br /> Tel: +357 22 841 795
                                    <br /> Fax: +357 22 357 484
                                    <br /> Email: liveonline@globaltraining.org
                                    <br /> Address: 46, Makedonitissas Ave., P.O. Box 24005, 1700 Nicosia </p>
                            </div>
                        </div>
                        <br />
                        <br />
                    </body>
                </html>';
        wp_mail($studentEmail,$subject,$body,$headers);
    }
}

/**
 * Send email to admissions
 * This function is disabled as not requested
 */
private static function send_email_to_admissions($type, $program, $status, $name, $body){
    $date = date("Y/m/d");
    $subject = '['.$status.']['.$type.']'.$name.' '.$program.' '.$date;
    $to = ['toumpas.p@globaltraining.org'];
    $body = '<!DOCTYPE html>
                <html xmlns="http://www.w3.org/1999/xhtml">
                    <head>
                        <title>Globaltraining</title>
                        <style>
                            @import url(http://fonts.googleapis.com/css?family=Lato:400,700,900);
                            body { font-family: \'Lato\', sans-serif; margin: 0; font-size: 16px; color: #565656; line-height: 25px; } 
                        </style>
                    </head>
                    <body>'.$body.'</body>
                </html>';
    $headers = array('Content-Type: text/html; charset=UTF-8');
    wp_mail($to,$subject,$body,$headers);
}

/**
 * Send email to developers
 */
private static function send_email_to_dev($type, $program, $status, $name, $body){
    $date = date("Y/m/d");
    $subject = '['.$status.']['.$type.']'.$name.' '.$program.' '.$date;
    $body = '<!DOCTYPE html>
                <html xmlns="http://www.w3.org/1999/xhtml">
                    <head>
                        <title>Globaltraining</title>
                        <style>
                            @import url(http://fonts.googleapis.com/css?family=Lato:400,700,900);
                            body { font-family: \'Lato\', sans-serif; margin: 0; font-size: 16px; color: #565656; line-height: 25px; } 
                        </style>
                    </head>
                    <body>'.$body.'</body>
                </html>';
    $headers = array('Content-Type: text/html; charset=UTF-8');
    wp_mail('toumpas.p@globaltraining.org',$subject,$body,$headers);
}


}