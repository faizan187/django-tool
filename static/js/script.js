

let input_base = document.getElementById('input_base')

let ngcn_site_type = document.getElementById('id_ngcn_site_type')
ngcn_site_type.onchange = function(){
    let x = document.getElementById('id_ngcn_site_type').value;
    if ((x == 'plus' || x =='type-b') &! (document.getElementById('id_site_id')) &! (document.getElementById('id_subnet_gibp')) &! (document.getElementById('id_subnet_gibb')) &! (document.getElementById('id_reap_subnet')) &! (document.getElementById('id_infra_loopback_subnet')) &! (document.getElementById('id_infra_p2p_subnet')) &! (document.getElementById('id_itr_asn')) &! (document.getElementById('id_external_subnet'))){
        let site_id_label = document.createElement("label");
        site_id_label.setAttribute('id', 'id_site_id_label');
        site_id_label.textContent = 'Site_id: ';
        input_base.appendChild(site_id_label)
        let site_id = document.createElement('input');
        site_id.setAttribute('type', 'text');
        site_id.setAttribute('name', 'site_id');
        site_id.setAttribute('id', 'id_site_id');
        site_id.setAttribute('class', 'input_base');
        site_id.setAttribute('class', 'form-control');
        site_id.setAttribute('style', 'width:300px');
        input_base.appendChild(site_id);
        linebreak = document.createElement("br");
        input_base.appendChild(linebreak);

        let subnet_gibp_label = document.createElement("label");
        subnet_gibp_label.setAttribute('id', 'id_subnet_gibp_label');
        subnet_gibp_label.textContent = 'subnet_gibp: ';
        input_base.appendChild(subnet_gibp_label)
        let subnet_gibp = document.createElement('input');
        subnet_gibp.setAttribute('type', 'text');
        subnet_gibp.setAttribute('name', 'subnet_gibp');
        subnet_gibp.setAttribute('id', 'id_subnet_gibp');
        subnet_gibp.setAttribute('class', 'input_base');
        subnet_gibp.setAttribute('class', 'form-control');
        subnet_gibp.setAttribute('style', 'width:300px');
        input_base.appendChild(subnet_gibp);
        linebreak = document.createElement("br");
        input_base.appendChild(linebreak);

        let subnet_gibb_label = document.createElement("label");
        subnet_gibb_label.setAttribute('id', 'id_subnet_gibb_label');
        subnet_gibb_label.textContent = 'subnet_gibb: ';
        input_base.appendChild(subnet_gibb_label)
        let subnet_gibb = document.createElement('input');
        subnet_gibb.setAttribute('type', 'text');
        subnet_gibb.setAttribute('name', 'subnet_gibb');
        subnet_gibb.setAttribute('id', 'id_subnet_gibb');
        subnet_gibb.setAttribute('class', 'input_base');
        subnet_gibb.setAttribute('class', 'form-control');
        subnet_gibb.setAttribute('style', 'width:300px');
        input_base.appendChild(subnet_gibb);
        linebreak = document.createElement("br");
        input_base.appendChild(linebreak);

        let reap_subnet_label = document.createElement("label");
        reap_subnet_label.setAttribute('id', 'id_reap_subnet_label');
        reap_subnet_label.textContent = 'reap_subnet: ';
        input_base.appendChild(reap_subnet_label)
        let reap_subnet = document.createElement('input');
        reap_subnet.setAttribute('type', 'text');
        reap_subnet.setAttribute('name', 'reap_subnet');
        reap_subnet.setAttribute('id', 'id_reap_subnet');
        reap_subnet.setAttribute('class', 'input_base');
        reap_subnet.setAttribute('class', 'form-control');
        reap_subnet.setAttribute('style', 'width:300px');
        input_base.appendChild(reap_subnet);
        linebreak = document.createElement("br");
        input_base.appendChild(linebreak);

        let infra_loopback_subnet_label = document.createElement("label");
        infra_loopback_subnet_label.setAttribute('id', 'id_infra_loopback_subnet_label');
        infra_loopback_subnet_label.textContent = 'infra_loopback_subnet: ';
        input_base.appendChild(infra_loopback_subnet_label)
        let infra_loopback_subnet = document.createElement('input');
        infra_loopback_subnet.setAttribute('type', 'text');
        infra_loopback_subnet.setAttribute('name', 'infra_loopback_subnet');
        infra_loopback_subnet.setAttribute('id', 'id_infra_loopback_subnet');
        infra_loopback_subnet.setAttribute('class', 'input_base');
        infra_loopback_subnet.setAttribute('class', 'form-control');
        infra_loopback_subnet.setAttribute('style', 'width:300px');
        input_base.appendChild(infra_loopback_subnet);
        linebreak = document.createElement("br");
        input_base.appendChild(linebreak);

        let infra_p2p_subnet_label = document.createElement("label");
        infra_p2p_subnet_label.setAttribute('id', 'id_infra_p2p_subnet_label');
        infra_p2p_subnet_label.textContent = 'infra_p2p_subnet: ';
        input_base.appendChild(infra_p2p_subnet_label)
        let infra_p2p_subnet = document.createElement('input');
        infra_p2p_subnet.setAttribute('type', 'text');
        infra_p2p_subnet.setAttribute('name', 'infra_p2p_subnet');
        infra_p2p_subnet.setAttribute('id', 'id_infra_p2p_subnet');
        infra_p2p_subnet.setAttribute('class', 'input_base');
        infra_p2p_subnet.setAttribute('class', 'form-control');
        infra_p2p_subnet.setAttribute('style', 'width:300px');
        input_base.appendChild(infra_p2p_subnet);
        linebreak = document.createElement("br");
        input_base.appendChild(linebreak);

        let itr_asn_label = document.createElement("label");
        itr_asn_label.setAttribute('id', 'id_itr_asn_label');
        itr_asn_label.textContent = 'itr_asn: ';
        input_base.appendChild(itr_asn_label)
        let itr_asn = document.createElement('input');
        itr_asn.setAttribute('type', 'text');
        itr_asn.setAttribute('name', 'itr_asn');
        itr_asn.setAttribute('id', 'id_itr_asn');
        itr_asn.setAttribute('class', 'input_base');
        itr_asn.setAttribute('class', 'form-control');
        itr_asn.setAttribute('style', 'width:300px');
        input_base.appendChild(itr_asn);
        linebreak = document.createElement("br");
        input_base.appendChild(linebreak);

        let external_subnet_label = document.createElement("label");
        external_subnet_label.setAttribute('id', 'id_external_subnet_label');
        external_subnet_label.textContent = 'external_subnet: ';
        input_base.appendChild(external_subnet_label)
        let external_subnet = document.createElement('input');
        external_subnet.setAttribute('type', 'text');
        external_subnet.setAttribute('name', 'external_subnet');
        external_subnet.setAttribute('id', 'id_external_subnet');
        external_subnet.setAttribute('class', 'input_base');
        external_subnet.setAttribute('class', 'form-control');
        external_subnet.setAttribute('style', 'width:300px');
        input_base.appendChild(external_subnet);
        linebreak = document.createElement("br");
        input_base.appendChild(linebreak);


    }
    else if ((x =='standard') && ((document.getElementById('id_site_id')) || (document.getElementById('id_subnet_gibp')) || (document.getElementById('id_subnet_gibb')) || (document.getElementById('id_reap_subnet')) || (document.getElementById('id_infra_loopback_subnet')) || (document.getElementById('id_infra_p2p_subnet')) || (document.getElementById('id_itr_asn')) || (document.getElementById('id_external_subnet')))){
            input_base.removeChild(id_site_id_label)
            input_base.removeChild(id_site_id)
            input_base.removeChild(id_subnet_gibp_label)
            input_base.removeChild(id_subnet_gibp)
            input_base.removeChild(id_subnet_gibb_label)
            input_base.removeChild(id_subnet_gibb)
            input_base.removeChild(id_reap_subnet_label)
            input_base.removeChild(id_reap_subnet)
            input_base.removeChild(id_infra_loopback_subnet_label)
            input_base.removeChild(id_infra_loopback_subnet)
            input_base.removeChild(id_infra_p2p_subnet_label)
            input_base.removeChild(id_infra_p2p_subnet)
            input_base.removeChild(id_itr_asn_label)
            input_base.removeChild(id_itr_asn)
            input_base.removeChild(id_external_subnet_label)
            input_base.removeChild(id_external_subnet)
            }
}


//let input_base = document.getElementById('input_base')
//
//let ngcn_site_type = document.getElementById('id_ngcn_site_type')
//ngcn_site_type.onchange = function(){
//    let x = document.getElementById('id_ngcn_site_type').value;
//    if ((x == 'plus' || x =='b') &! (document.getElementById('id_site_id') || document.getElementById('id_nexus_id'))){
//        let site_id_label = document.createElement("label");
//        site_id_label.setAttribute('id', 'id_site_id_label');
//        site_id_label.textContent = 'Site_id: ';
//        input_base.appendChild(site_id_label)
//        let site_id = document.createElement('input');
//        site_id.setAttribute('type', 'text');
//        site_id.setAttribute('name', 'site_id');
//        site_id.setAttribute('id', 'id_site_id');
//        site_id.setAttribute('class', 'input_base');
//        site_id.setAttribute('class', 'form-control');
//        site_id.setAttribute('style', 'width:300px');
//        input_base.appendChild(site_id);
//        linebreak = document.createElement("br");
//        input_base.appendChild(linebreak);
//
//        let nexus_label = document.createElement("label");
//        nexus_label.setAttribute('id', 'id_nexus_label');
//        nexus_label.textContent = 'Extranet Switch (Nexus): ';
//        input_base.appendChild(nexus_label)
//        let nexus = document.createElement('input');
//        nexus.setAttribute('type', 'text');
//        nexus.setAttribute('name', 'nexus');
//        nexus.setAttribute('id', 'id_nexus');
//        nexus.setAttribute('class', 'input_base');
//        nexus.setAttribute('class', 'form-control');
//        nexus.setAttribute('style', 'width:300px');
//        input_base.appendChild(nexus);
//        linebreak = document.createElement("br");
//        input_base.appendChild(linebreak);
//    }
//    else if (x =='S' && (document.getElementById('id_site_id'))){
//            input_base.removeChild(id_site_id_label)
//            input_base.removeChild(id_site_id)
//            input_base.removeChild(id_nexus_label)
//            input_base.removeChild(id_nexus)
//            }
//}



let number_of_user_switches = document.getElementById('id_number_of_user_switches')
number_of_user_switches.onchange = function(){
    let x = document.getElementById('id_number_of_user_switches').value;
    if (document.getElementById('switch_serial_id') || ! document.getElementById('switch_serial_id')){
        let serialNumberTotal = document.getElementsByName('switch_serial_numbers[]');
        while (serialNumberTotal.length >0) {
        serialNumberTotal[0].remove();
        }
        for (i = 1; i <= x; i++){
            let switch_serial_id_label = document.createElement("label");
            switch_serial_id_label.setAttribute('id', 'switch_serial_id_label');
            switch_serial_id_label.setAttribute('class', 'serial_number');
            switch_serial_id_label.setAttribute('name', 'switch_serial_numbers[]');
            switch_serial_id_label.textContent = 'Switch ' +i+ ' Serial_number: ';
            input_base.appendChild(switch_serial_id_label)
            let switch_serial_id = document.createElement('input');
            switch_serial_id.setAttribute('type', 'text');
            switch_serial_id.setAttribute('name', "switch_serial_numbers[]");
            switch_serial_id.setAttribute('id', 'switch_serial_id');
            switch_serial_id.setAttribute('class', 'serial_number');
            switch_serial_id.setAttribute('class', 'form-control');
            switch_serial_id.setAttribute('style', 'width:300px');
            input_base.appendChild(switch_serial_id);
            linebreak = document.createElement("br");
            linebreak.setAttribute('class', 'serial_number')
            linebreak.setAttribute('id', 'switch_lb_id')
            input_base.appendChild(linebreak);
        }
    }
}

let number_of_stacks = document.getElementById('id_number_of_stacks')
number_of_stacks.onchange = function(){
    let x = document.getElementById('id_number_of_stacks').value;
    if (document.getElementById('user_stack_size_id') || ! document.getElementById('user_stack_size_id')){
//        let stackSizeTotal = document.getElementsByClassName('stack_size');
        let stackSizeTotal = document.getElementsByName("user_stack_size[]");
        let stackRackTotal = document.getElementsByName("user_stack_rack_location[]");
        let stackRoomTotal = document.getElementsByName("user_stack_room_location[]");
        while (stackSizeTotal.length >0) {
        stackSizeTotal[0].remove();
        stackRackTotal[0].remove();
        stackRoomTotal[0].remove();

        }
        for (i = 1; i <= x; i++){
            let user_stack_size_id_label = document.createElement("label");
            user_stack_size_id_label.setAttribute('id', 'user_stack_size_id_label');
            user_stack_size_id_label.setAttribute('class', 'stack_size');
            user_stack_size_id_label.setAttribute('name', "user_stack_size[]");
            user_stack_size_id_label.textContent = 'User Stack ' +i+ ' Size: ';
            input_base.appendChild(user_stack_size_id_label)
            let user_stack_size_id = document.createElement('input');
            user_stack_size_id.setAttribute('type', 'text');
            user_stack_size_id.setAttribute('name', "user_stack_size[]");
            user_stack_size_id.setAttribute('id', 'user_stack_size_id');
            user_stack_size_id.setAttribute('class', 'stack_size');
            user_stack_size_id.setAttribute('class', 'form-control');
            user_stack_size_id.setAttribute('style', 'width:300px');
            input_base.appendChild(user_stack_size_id);
            linebreak = document.createElement("br");
            linebreak.setAttribute('class', 'stack_size')
            input_base.appendChild(linebreak);

            let user_stack_rack_location_id_label = document.createElement("label");
            user_stack_rack_location_id_label.setAttribute('id', 'user_stack_rack_location_id_label');
            user_stack_rack_location_id_label.setAttribute('class', 'stack_rack_location');
            user_stack_rack_location_id_label.setAttribute('name', "user_stack_rack_location[]");
            user_stack_rack_location_id_label.textContent = 'User Stack ' +i+ ' rack_location: ';
            input_base.appendChild(user_stack_rack_location_id_label)
            let user_stack_rack_location_id = document.createElement('input');
            user_stack_rack_location_id.setAttribute('type', 'text');
            user_stack_rack_location_id.setAttribute('name', "user_stack_rack_location[]");
            user_stack_rack_location_id.setAttribute('id', 'user_stack_rack_location_id');
            user_stack_rack_location_id.setAttribute('class', 'stack_rack_location');
            user_stack_rack_location_id.setAttribute('class', 'form-control');
            user_stack_rack_location_id.setAttribute('style', 'width:300px');
            input_base.appendChild(user_stack_rack_location_id);
            linebreak = document.createElement("br");
            linebreak.setAttribute('class', 'stack_rack_location')
            input_base.appendChild(linebreak);

            let user_stack_room_location_id_label = document.createElement("label");
            user_stack_room_location_id_label.setAttribute('id', 'user_stack_room_location_id_label');
            user_stack_room_location_id_label.setAttribute('class', 'stack_room_location');
            user_stack_room_location_id_label.setAttribute('name', "user_stack_room_location[]");
            user_stack_room_location_id_label.textContent = 'User Stack ' +i+ ' room_location: ';
            input_base.appendChild(user_stack_room_location_id_label)
            let user_stack_room_location_id = document.createElement('input');
            user_stack_room_location_id.setAttribute('type', 'text');
            user_stack_room_location_id.setAttribute('name', "user_stack_room_location[]");
            user_stack_room_location_id.setAttribute('id', 'user_stack_room_location_id');
            user_stack_room_location_id.setAttribute('class', 'stack_room_location');
            user_stack_room_location_id.setAttribute('class', 'form-control');
            user_stack_room_location_id.setAttribute('style', 'width:300px');
            input_base.appendChild(user_stack_room_location_id);
            linebreak = document.createElement("br");
            linebreak.setAttribute('class', 'stack_room_location')
            input_base.appendChild(linebreak);
        }
    }
}






let number_of_oob_switches = document.getElementById('id_number_of_oob_switches')
number_of_oob_switches.onchange = function(){
    let x = document.getElementById('id_number_of_oob_switches').value;
    if (document.getElementById('oob_switch_serial_id') || ! document.getElementById('oob_switch_serial_id')){
        let serialNumberTotal = document.getElementsByName('oob_switch_serial_numbers[]');
        let stackRackTotal = document.getElementsByName("oob_stack_rack_location[]");
        let stackRoomTotal = document.getElementsByName("oob_stack_room_location[]");
        while (serialNumberTotal.length >0) {
        serialNumberTotal[0].remove();
        stackRackTotal[0].remove();
        stackRoomTotal[0].remove();
        }
        for (i = 1; i <= x; i++){
            let oob_switch_serial_id_label = document.createElement("label");
            oob_switch_serial_id_label.setAttribute('id', 'oob_switch_serial_id_label');
            oob_switch_serial_id_label.setAttribute('class', 'oob_serial_number');
            oob_switch_serial_id_label.setAttribute('name', 'oob_switch_serial_numbers[]');
            oob_switch_serial_id_label.textContent = 'OOB Switch ' +i+ ' Serial_number: ';
            input_base.appendChild(oob_switch_serial_id_label)
            let oob_switch_serial_id = document.createElement('input');
            oob_switch_serial_id.setAttribute('type', 'text');
            oob_switch_serial_id.setAttribute('name', "oob_switch_serial_numbers[]");
            oob_switch_serial_id.setAttribute('id', 'oob_switch_serial_id');
            oob_switch_serial_id.setAttribute('class', 'oob_serial_number');
            oob_switch_serial_id.setAttribute('class', 'form-control');
            oob_switch_serial_id.setAttribute('style', 'width:300px');
            input_base.appendChild(oob_switch_serial_id);
            linebreak = document.createElement("br");
            linebreak.setAttribute('class', 'oob_serial_number')
            linebreak.setAttribute('id', 'switch_lb_id')
            input_base.appendChild(linebreak);

            if (i > 2){

                let oob_stack_rack_location_id_label = document.createElement("label");
                oob_stack_rack_location_id_label.setAttribute('id', 'oob_stack_rack_location_id_label');
                oob_stack_rack_location_id_label.setAttribute('class', 'stack_rack_location');
                oob_stack_rack_location_id_label.setAttribute('name', "oob_stack_rack_location[]");
                oob_stack_rack_location_id_label.textContent = 'oob Stack ' +i+ ' rack_location: ';
                input_base.appendChild(oob_stack_rack_location_id_label)
                let oob_stack_rack_location_id = document.createElement('input');
                oob_stack_rack_location_id.setAttribute('type', 'text');
                oob_stack_rack_location_id.setAttribute('name', "oob_stack_rack_location[]");
                oob_stack_rack_location_id.setAttribute('id', 'oob_stack_rack_location_id');
                oob_stack_rack_location_id.setAttribute('class', 'stack_rack_location');
                oob_stack_rack_location_id.setAttribute('class', 'form-control');
                oob_stack_rack_location_id.setAttribute('style', 'width:300px');
                input_base.appendChild(oob_stack_rack_location_id);
                linebreak = document.createElement("br");
                linebreak.setAttribute('class', 'stack_rack_location')
                input_base.appendChild(linebreak);

                let oob_stack_room_location_id_label = document.createElement("label");
                oob_stack_room_location_id_label.setAttribute('id', 'oob_stack_room_location_id_label');
                oob_stack_room_location_id_label.setAttribute('class', 'stack_room_location');
                oob_stack_room_location_id_label.setAttribute('name', "oob_stack_room_location[]");
                oob_stack_room_location_id_label.textContent = 'oob Stack ' +i+ ' room_location: ';
                input_base.appendChild(oob_stack_room_location_id_label)
                let oob_stack_room_location_id = document.createElement('input');
                oob_stack_room_location_id.setAttribute('type', 'text');
                oob_stack_room_location_id.setAttribute('name', "oob_stack_room_location[]");
                oob_stack_room_location_id.setAttribute('id', 'oob_stack_room_location_id');
                oob_stack_room_location_id.setAttribute('class', 'stack_room_location');
                oob_stack_room_location_id.setAttribute('class', 'form-control');
                oob_stack_room_location_id.setAttribute('style', 'width:300px');
                input_base.appendChild(oob_stack_room_location_id);
                linebreak = document.createElement("br");
                linebreak.setAttribute('class', 'stack_room_location')
                input_base.appendChild(linebreak);
            }
        }
    }
}


let number_of_ts = document.getElementById('id_number_of_ts')
number_of_ts.onchange = function(){
    NumOfOobSwitches = document.getElementById('id_number_of_oob_switches').value;
    NumOfUserSwitches = document.getElementById('id_number_of_user_switches').value;
    let x = document.getElementById('id_number_of_ts').value;
    if (document.getElementById('ts_serial_id') || ! document.getElementById('ts_serial_id')){
        let serialNumberTotal = document.getElementsByName('ts_serial_numbers[]');
        while (serialNumberTotal.length >0) {
        serialNumberTotal[0].remove();
        }
        for (i = 1; i <= x; i++){
//            let ts_serial_id_label = document.createElement("label");
//            ts_serial_id_label.setAttribute('id', 'ts_serial_id_label');
//            ts_serial_id_label.setAttribute('class', 'ts_serial_number');
//            ts_serial_id_label.setAttribute('name', 'ts_serial_numbers[]');
//            ts_serial_id_label.textContent = 'ts '+i+ ' Serial_number: ';
//            input_base.appendChild(ts_serial_id_label)
//            let ts_serial_id = document.createElement('input');
//            ts_serial_id.setAttribute('type', 'text');
//            ts_serial_id.setAttribute('name', "ts_serial_numbers[]");
//            ts_serial_id.setAttribute('id', 'ts_serial_id');
//            ts_serial_id.setAttribute('class', 'ts_serial_number');
//            ts_serial_id.setAttribute('class', 'form-control');
//            ts_serial_id.setAttribute('style', 'width:300px');
//            input_base.appendChild(ts_serial_id);
//            linebreak = document.createElement("br");
//            linebreak.setAttribute('class', 'ts_serial_number')
//            linebreak.setAttribute('id', 'ts_lb_id')
//            input_base.appendChild(linebreak);

            let ts_rack_location_id_label = document.createElement("label");
            ts_rack_location_id_label.setAttribute('id', 'ts_rack_location_id_label');
            ts_rack_location_id_label.setAttribute('class', 'ts_rack_location');
            ts_rack_location_id_label.setAttribute('name', "ts_rack_location[]");
            ts_rack_location_id_label.textContent = 'Terminal Server ' +i+ ' rack_location: ';
            input_base.appendChild(ts_rack_location_id_label)
            let ts_rack_location_id = document.createElement('input');
            ts_rack_location_id.setAttribute('type', 'text');
            ts_rack_location_id.setAttribute('name', "ts_rack_location[]");
            ts_rack_location_id.setAttribute('id', 'ts_rack_location_id');
            ts_rack_location_id.setAttribute('class', 'ts_rack_location');
            ts_rack_location_id.setAttribute('class', 'form-control');
            ts_rack_location_id.setAttribute('style', 'width:300px');
            input_base.appendChild(ts_rack_location_id);
            linebreak = document.createElement("br");
            linebreak.setAttribute('class', 'ts_rack_location')
            input_base.appendChild(linebreak);

            let ts_room_location_id_label = document.createElement("label");
            ts_room_location_id_label.setAttribute('id', 'ts_room_location_id_label');
            ts_room_location_id_label.setAttribute('class', 'ts_room_location');
            ts_room_location_id_label.setAttribute('name', "ts_room_location[]");
            ts_room_location_id_label.textContent = 'Terminal Server ' +i+ ' room_location: ';
            input_base.appendChild(ts_room_location_id_label)
            let ts_room_location_id = document.createElement('input');
            ts_room_location_id.setAttribute('type', 'text');
            ts_room_location_id.setAttribute('name', "ts_room_location[]");
            ts_room_location_id.setAttribute('id', 'ts_room_location_id');
            ts_room_location_id.setAttribute('class', 'ts_room_location');
            ts_room_location_id.setAttribute('class', 'form-control');
            ts_room_location_id.setAttribute('style', 'width:300px');
            input_base.appendChild(ts_room_location_id);
            linebreak = document.createElement("br");
            linebreak.setAttribute('class', 'ts_room_location')
            input_base.appendChild(linebreak);
    }
        for (i = 1; i <= 2; i++){
            for (j = 0; j <= 1; j++){
                let mx_rack_id_label = document.createElement("label");
                mx_rack_id_label.setAttribute('id', 'mx_rack_id_label');
                mx_rack_id_label.setAttribute('class', 'mx_rack_location');
                mx_rack_id_label.setAttribute('name', 'device_rack_location[]');
                mx_rack_id_label.textContent = 'mx'+i+'-re'+j+' rack location: ';
                input_base.appendChild(mx_rack_id_label)
                let mx_rack_id = document.createElement('input');
                mx_rack_id.setAttribute('type', 'text');
                mx_rack_id.setAttribute('name', "device_rack_location[]");
                mx_rack_id.setAttribute('id', 'mx_rack_id');
                mx_rack_id.setAttribute('class', 'mx_rack_location');
                mx_rack_id.setAttribute('class', 'form-control');
                mx_rack_id.setAttribute('style', 'width:300px');
                input_base.appendChild(mx_rack_id);
                linebreak = document.createElement("br");
                linebreak.setAttribute('class', 'mx_rack_location')
                linebreak.setAttribute('id', 'mx_rack_lb_id')
                input_base.appendChild(linebreak);

                let mx_room_id_label = document.createElement("label");
                mx_room_id_label.setAttribute('id', 'mx_room_id_label');
                mx_room_id_label.setAttribute('class', 'mx_room_location');
                mx_room_id_label.setAttribute('name', 'device_room_location[]');
                mx_room_id_label.textContent = 'mx'+i+'-re'+j+' room location: ';
                input_base.appendChild(mx_room_id_label)
                let mx_room_id = document.createElement('input');
                mx_room_id.setAttribute('type', 'text');
                mx_room_id.setAttribute('name', "device_room_location[]");
                mx_room_id.setAttribute('id', 'mx_room_id');
                mx_room_id.setAttribute('class', 'mx_room_location');
                mx_room_id.setAttribute('class', 'form-control');
                mx_room_id.setAttribute('style', 'width:300px');
                input_base.appendChild(mx_room_id);
                linebreak = document.createElement("br");
                linebreak.setAttribute('class', 'mx_room_location')
                linebreak.setAttribute('id', 'mx_room_lb_id')
                input_base.appendChild(linebreak);
            }
        }
        for (i = 1; i <= NumOfOobSwitches; i++){
            let oob_switch_rack_id_label = document.createElement("label");
            oob_switch_rack_id_label.setAttribute('id', 'oob_switch_rack_id_label');
            oob_switch_rack_id_label.setAttribute('class', 'oob_switch_rack_location');
            oob_switch_rack_id_label.setAttribute('name', 'device_rack_location[]');
            oob_switch_rack_id_label.textContent = 'oob_switch-'+i+' rack location: ';
            input_base.appendChild(oob_switch_rack_id_label)
            let oob_switch_rack_id = document.createElement('input');
            oob_switch_rack_id.setAttribute('type', 'text');
            oob_switch_rack_id.setAttribute('name', "device_rack_location[]");
            oob_switch_rack_id.setAttribute('id', 'oob_switch_rack_id');
            oob_switch_rack_id.setAttribute('class', 'oob_switch_rack_location');
            oob_switch_rack_id.setAttribute('class', 'form-control');
            oob_switch_rack_id.setAttribute('style', 'width:300px');
            input_base.appendChild(oob_switch_rack_id);
            linebreak = document.createElement("br");
            linebreak.setAttribute('class', 'oob_switch_rack_location')
            linebreak.setAttribute('id', 'oob_switch_rack_lb_id')
            input_base.appendChild(linebreak);

            let oob_switch_room_id_label = document.createElement("label");
            oob_switch_room_id_label.setAttribute('id', 'oob_switch_room_id_label');
            oob_switch_room_id_label.setAttribute('class', 'oob_switch_room_location');
            oob_switch_room_id_label.setAttribute('name', 'device_room_location[]');
            oob_switch_room_id_label.textContent = 'oob_switch-'+i+' room location: ';
            input_base.appendChild(oob_switch_room_id_label)
            let oob_switch_room_id = document.createElement('input');
            oob_switch_room_id.setAttribute('type', 'text');
            oob_switch_room_id.setAttribute('name', "device_room_location[]");
            oob_switch_room_id.setAttribute('id', 'oob_switch_room_id');
            oob_switch_room_id.setAttribute('class', 'oob_switch_room_location');
            oob_switch_room_id.setAttribute('class', 'form-control');
            oob_switch_room_id.setAttribute('style', 'width:300px');
            input_base.appendChild(oob_switch_room_id);
            linebreak = document.createElement("br");
            linebreak.setAttribute('class', 'oob_switch_room_location')
            linebreak.setAttribute('id', 'oob_switch_room_lb_id')
            input_base.appendChild(linebreak);
        }
        for (i = 1; i <= NumOfUserSwitches; i++){
            let user_switch_rack_id_label = document.createElement("label");
            user_switch_rack_id_label.setAttribute('id', 'user_switch_rack_id_label');
            user_switch_rack_id_label.setAttribute('class', 'user_switch_rack_location');
            user_switch_rack_id_label.setAttribute('name', 'device_rack_location[]');
            user_switch_rack_id_label.textContent = 'user_switch-'+i+' rack location: ';
            input_base.appendChild(user_switch_rack_id_label)
            let user_switch_rack_id = document.createElement('input');
            user_switch_rack_id.setAttribute('type', 'text');
            user_switch_rack_id.setAttribute('name', "device_rack_location[]");
            user_switch_rack_id.setAttribute('id', 'user_switch_rack_id');
            user_switch_rack_id.setAttribute('class', 'user_switch_rack_location');
            user_switch_rack_id.setAttribute('class', 'form-control');
            user_switch_rack_id.setAttribute('style', 'width:300px');
            input_base.appendChild(user_switch_rack_id);
            linebreak = document.createElement("br");
            linebreak.setAttribute('class', 'user_switch_rack_location')
            linebreak.setAttribute('id', 'user_switch_rack_lb_id')
            input_base.appendChild(linebreak);

            let user_switch_room_id_label = document.createElement("label");
            user_switch_room_id_label.setAttribute('id', 'user_switch_room_id_label');
            user_switch_room_id_label.setAttribute('class', 'user_switch_room_location');
            user_switch_room_id_label.setAttribute('name', 'device_room_location[]');
            user_switch_room_id_label.textContent = 'user_switch-'+i+' room location: ';
            input_base.appendChild(user_switch_room_id_label)
            let user_switch_room_id = document.createElement('input');
            user_switch_room_id.setAttribute('type', 'text');
            user_switch_room_id.setAttribute('name', "device_room_location[]");
            user_switch_room_id.setAttribute('id', 'user_switch_room_id');
            user_switch_room_id.setAttribute('class', 'user_switch_room_location');
            user_switch_room_id.setAttribute('class', 'form-control');
            user_switch_room_id.setAttribute('style', 'width:300px');
            input_base.appendChild(user_switch_room_id);
            linebreak = document.createElement("br");
            linebreak.setAttribute('class', 'user_switch_room_location')
            linebreak.setAttribute('id', 'user_switch_room_lb_id')
            input_base.appendChild(linebreak);
        }

        let itr_fw_a_rack_id_label = document.createElement("label");
        itr_fw_a_rack_id_label.setAttribute('id', 'itr_fw_a_rack_id_label');
        itr_fw_a_rack_id_label.setAttribute('class', 'itr_fw_a_rack_location');
        itr_fw_a_rack_id_label.setAttribute('name', 'device_rack_location[]');
        itr_fw_a_rack_id_label.textContent = 'itr_fw_a-A rack location: ';
        input_base.appendChild(itr_fw_a_rack_id_label)
        let itr_fw_a_rack_id = document.createElement('input');
        itr_fw_a_rack_id.setAttribute('type', 'text');
        itr_fw_a_rack_id.setAttribute('name', "device_rack_location[]");
        itr_fw_a_rack_id.setAttribute('id', 'itr_fw_a_rack_id');
        itr_fw_a_rack_id.setAttribute('class', 'itr_fw_a_rack_location');
        itr_fw_a_rack_id.setAttribute('class', 'form-control');
        itr_fw_a_rack_id.setAttribute('style', 'width:300px');
        input_base.appendChild(itr_fw_a_rack_id);
        linebreak = document.createElement("br");
        linebreak.setAttribute('class', 'itr_fw_a_rack_location')
        linebreak.setAttribute('id', 'itr_fw_a_rack_lb_id')
        input_base.appendChild(linebreak);

        let itr_fw_a_room_id_label = document.createElement("label");
        itr_fw_a_room_id_label.setAttribute('id', 'itr_fw_a_room_id_label');
        itr_fw_a_room_id_label.setAttribute('class', 'itr_fw_a_room_location');
        itr_fw_a_room_id_label.setAttribute('name', 'device_room_location[]');
        itr_fw_a_room_id_label.textContent = 'itr_fw_a-A room location: ';
        input_base.appendChild(itr_fw_a_room_id_label)
        let itr_fw_a_room_id = document.createElement('input');
        itr_fw_a_room_id.setAttribute('type', 'text');
        itr_fw_a_room_id.setAttribute('name', "device_room_location[]");
        itr_fw_a_room_id.setAttribute('id', 'itr_fw_a_room_id');
        itr_fw_a_room_id.setAttribute('class', 'itr_fw_a_room_location');
        itr_fw_a_room_id.setAttribute('class', 'form-control');
        itr_fw_a_room_id.setAttribute('style', 'width:300px');
        input_base.appendChild(itr_fw_a_room_id);
        linebreak = document.createElement("br");
        linebreak.setAttribute('class', 'itr_fw_a_room_location')
        linebreak.setAttribute('id', 'itr_fw_a_room_lb_id')
        input_base.appendChild(linebreak);

        let itr_fw_b_rack_id_label = document.createElement("label");
        itr_fw_b_rack_id_label.setAttribute('id', 'itr_fw_b_rack_id_label');
        itr_fw_b_rack_id_label.setAttribute('class', 'itr_fw_b_rack_location');
        itr_fw_b_rack_id_label.setAttribute('name', 'device_rack_location[]');
        itr_fw_b_rack_id_label.textContent = 'itr_fw_b-B rack location: ';
        input_base.appendChild(itr_fw_b_rack_id_label)
        let itr_fw_b_rack_id = document.createElement('input');
        itr_fw_b_rack_id.setAttribute('type', 'text');
        itr_fw_b_rack_id.setAttribute('name', "device_rack_location[]");
        itr_fw_b_rack_id.setAttribute('id', 'itr_fw_b_rack_id');
        itr_fw_b_rack_id.setAttribute('class', 'itr_fw_b_rack_location');
        itr_fw_b_rack_id.setAttribute('class', 'form-control');
        itr_fw_b_rack_id.setAttribute('style', 'width:300px');
        input_base.appendChild(itr_fw_b_rack_id);
        linebreak = document.createElement("br");
        linebreak.setAttribute('class', 'itr_fw_b_rack_location')
        linebreak.setAttribute('id', 'itr_fw_b_rack_lb_id')
        input_base.appendChild(linebreak);

        let itr_fw_b_room_id_label = document.createElement("label");
        itr_fw_b_room_id_label.setAttribute('id', 'itr_fw_b_room_id_label');
        itr_fw_b_room_id_label.setAttribute('class', 'itr_fw_b_room_location');
        itr_fw_b_room_id_label.setAttribute('name', 'device_room_location[]');
        itr_fw_b_room_id_label.textContent = 'itr_fw_b-B room location: ';
        input_base.appendChild(itr_fw_b_room_id_label)
        let itr_fw_b_room_id = document.createElement('input');
        itr_fw_b_room_id.setAttribute('type', 'text');
        itr_fw_b_room_id.setAttribute('name', "device_room_location[]");
        itr_fw_b_room_id.setAttribute('id', 'itr_fw_b_room_id');
        itr_fw_b_room_id.setAttribute('class', 'itr_fw_b_room_location');
        itr_fw_b_room_id.setAttribute('class', 'form-control');
        itr_fw_b_room_id.setAttribute('style', 'width:300px');
        input_base.appendChild(itr_fw_b_room_id);
        linebreak = document.createElement("br");
        linebreak.setAttribute('class', 'itr_fw_b_room_location')
        linebreak.setAttribute('id', 'itr_fw_b_room_lb_id')
        input_base.appendChild(linebreak);

        let cradlepoint_rack_id_label = document.createElement("label");
        cradlepoint_rack_id_label.setAttribute('id', 'cradlepoint_rack_id_label');
        cradlepoint_rack_id_label.setAttribute('class', 'cradlepoint_rack_location');
        cradlepoint_rack_id_label.setAttribute('name', 'device_rack_location[]');
        cradlepoint_rack_id_label.textContent = 'cradlepoint rack location: ';
        input_base.appendChild(cradlepoint_rack_id_label)
        let cradlepoint_rack_id = document.createElement('input');
        cradlepoint_rack_id.setAttribute('type', 'text');
        cradlepoint_rack_id.setAttribute('name', "device_rack_location[]");
        cradlepoint_rack_id.setAttribute('id', 'cradlepoint_rack_id');
        cradlepoint_rack_id.setAttribute('class', 'cradlepoint_rack_location');
        cradlepoint_rack_id.setAttribute('class', 'form-control');
        cradlepoint_rack_id.setAttribute('style', 'width:300px');
        input_base.appendChild(cradlepoint_rack_id);
        linebreak = document.createElement("br");
        linebreak.setAttribute('class', 'cradlepoint_rack_location')
        linebreak.setAttribute('id', 'cradlepoint_rack_lb_id')
        input_base.appendChild(linebreak);

        let cradlepoint_room_id_label = document.createElement("label");
        cradlepoint_room_id_label.setAttribute('id', 'cradlepoint_room_id_label');
        cradlepoint_room_id_label.setAttribute('class', 'cradlepoint_room_location');
        cradlepoint_room_id_label.setAttribute('name', 'device_room_location[]');
        cradlepoint_room_id_label.textContent = 'cradlepoint room location: ';
        input_base.appendChild(cradlepoint_room_id_label)
        let cradlepoint_room_id = document.createElement('input');
        cradlepoint_room_id.setAttribute('type', 'text');
        cradlepoint_room_id.setAttribute('name', "device_room_location[]");
        cradlepoint_room_id.setAttribute('id', 'cradlepoint_room_id');
        cradlepoint_room_id.setAttribute('class', 'cradlepoint_room_location');
        cradlepoint_room_id.setAttribute('class', 'form-control');
        cradlepoint_room_id.setAttribute('style', 'width:300px');
        input_base.appendChild(cradlepoint_room_id);
        linebreak = document.createElement("br");
        linebreak.setAttribute('class', 'cradlepoint_room_location')
        linebreak.setAttribute('id', 'cradlepoint_room_lb_id')
        input_base.appendChild(linebreak);

        let nuc_rack_id_label = document.createElement("label");
        nuc_rack_id_label.setAttribute('id', 'nuc_rack_id_label');
        nuc_rack_id_label.setAttribute('class', 'nuc_rack_location');
        nuc_rack_id_label.setAttribute('name', 'device_rack_location[]');
        nuc_rack_id_label.textContent = 'nuc rack location: ';
        input_base.appendChild(nuc_rack_id_label)
        let nuc_rack_id = document.createElement('input');
        nuc_rack_id.setAttribute('type', 'text');
        nuc_rack_id.setAttribute('name', "device_rack_location[]");
        nuc_rack_id.setAttribute('id', 'nuc_rack_id');
        nuc_rack_id.setAttribute('class', 'nuc_rack_location');
        nuc_rack_id.setAttribute('class', 'form-control');
        nuc_rack_id.setAttribute('style', 'width:300px');
        input_base.appendChild(nuc_rack_id);
        linebreak = document.createElement("br");
        linebreak.setAttribute('class', 'nuc_rack_location')
        linebreak.setAttribute('id', 'nuc_rack_lb_id')
        input_base.appendChild(linebreak);

        let nuc_room_id_label = document.createElement("label");
        nuc_room_id_label.setAttribute('id', 'nuc_room_id_label');
        nuc_room_id_label.setAttribute('class', 'nuc_room_location');
        nuc_room_id_label.setAttribute('name', 'device_room_location[]');
        nuc_room_id_label.textContent = 'nuc room location: ';
        input_base.appendChild(nuc_room_id_label)
        let nuc_room_id = document.createElement('input');
        nuc_room_id.setAttribute('type', 'text');
        nuc_room_id.setAttribute('name', "device_room_location[]");
        nuc_room_id.setAttribute('id', 'nuc_room_id');
        nuc_room_id.setAttribute('class', 'nuc_room_location');
        nuc_room_id.setAttribute('class', 'form-control');
        nuc_room_id.setAttribute('style', 'width:300px');
        input_base.appendChild(nuc_room_id);
        linebreak = document.createElement("br");
        linebreak.setAttribute('class', 'nuc_room_location')
        linebreak.setAttribute('id', 'nuc_room_lb_id')
        input_base.appendChild(linebreak);

        for (i = 1; i <= 2; i++){
            let macsec_rack_id_label = document.createElement("label");
            macsec_rack_id_label.setAttribute('id', 'macsec_rack_id_label');
            macsec_rack_id_label.setAttribute('class', 'macsec_rack_location');
            macsec_rack_id_label.setAttribute('name', 'device_rack_location[]');
            macsec_rack_id_label.textContent = 'macsec-'+i+' rack location: ';
            input_base.appendChild(macsec_rack_id_label)
            let macsec_rack_id = document.createElement('input');
            macsec_rack_id.setAttribute('type', 'text');
            macsec_rack_id.setAttribute('name', "device_rack_location[]");
            macsec_rack_id.setAttribute('id', 'macsec_rack_id');
            macsec_rack_id.setAttribute('class', 'macsec_rack_location');
            macsec_rack_id.setAttribute('class', 'form-control');
            macsec_rack_id.setAttribute('style', 'width:300px');
            input_base.appendChild(macsec_rack_id);
            linebreak = document.createElement("br");
            linebreak.setAttribute('class', 'macsec_rack_location')
            linebreak.setAttribute('id', 'macsec_rack_lb_id')
            input_base.appendChild(linebreak);

            let macsec_room_id_label = document.createElement("label");
            macsec_room_id_label.setAttribute('id', 'macsec_room_id_label');
            macsec_room_id_label.setAttribute('class', 'macsec_room_location');
            macsec_room_id_label.setAttribute('name', 'device_room_location[]');
            macsec_room_id_label.textContent = 'macsec-'+i+' room location: ';
            input_base.appendChild(macsec_room_id_label)
            let macsec_room_id = document.createElement('input');
            macsec_room_id.setAttribute('type', 'text');
            macsec_room_id.setAttribute('name', "device_room_location[]");
            macsec_room_id.setAttribute('id', 'macsec_room_id');
            macsec_room_id.setAttribute('class', 'macsec_room_location');
            macsec_room_id.setAttribute('class', 'form-control');
            macsec_room_id.setAttribute('style', 'width:300px');
            input_base.appendChild(macsec_room_id);
            linebreak = document.createElement("br");
            linebreak.setAttribute('class', 'macsec_room_location')
            linebreak.setAttribute('id', 'macsec_room_lb_id')
            input_base.appendChild(linebreak);
        }

    }
}


let server_stack_size = document.getElementById('id_server_stack_size');
server_stack_size.onchange = function(){
    let x = document.getElementById('id_server_stack_size').value;
    if (document.getElementById('server_switch_serial_id') || ! document.getElementById('server_switch_serial_id')){
        let serialNumberTotal = document.getElementsByName('server_switch_serial_numbers[]');
        while (serialNumberTotal.length >0) {
        serialNumberTotal[0].remove();
        }
        for (i = 1; i <= x; i++){
            let server_switch_serial_id_label = document.createElement("label");
            server_switch_serial_id_label.setAttribute('id', 'server_switch_serial_id_label');
            server_switch_serial_id_label.setAttribute('class', 'server_switch_serial_number');
            server_switch_serial_id_label.setAttribute('name', 'server_switch_serial_numbers[]');
            server_switch_serial_id_label.textContent = 'server_switch ' +i+ ' Serial_number: ';
            input_base.appendChild(server_switch_serial_id_label)
            let server_switch_serial_id = document.createElement('input');
            server_switch_serial_id.setAttribute('type', 'text');
            server_switch_serial_id.setAttribute('name', "server_switch_serial_numbers[]");
            server_switch_serial_id.setAttribute('id', 'server_switch_serial_id');
            server_switch_serial_id.setAttribute('class', 'server_switch_serial_number');
            server_switch_serial_id.setAttribute('class', 'form-control');
            server_switch_serial_id.setAttribute('style', 'width:300px');
            input_base.appendChild(server_switch_serial_id);
            linebreak = document.createElement("br");
            linebreak.setAttribute('class', 'server_switch_serial_number')
            linebreak.setAttribute('id', 'server_switch_lb_id')
            input_base.appendChild(linebreak);

            let server_switch_rack_id_label = document.createElement("label");
            server_switch_rack_id_label.setAttribute('id', 'server_switch_rack_id_label');
            server_switch_rack_id_label.setAttribute('class', 'server_switch_rack_location');
            server_switch_rack_id_label.setAttribute('name', 'device_rack_location[]');
            server_switch_rack_id_label.textContent = 'server_switch-'+i+' rack location: ';
            input_base.appendChild(server_switch_rack_id_label)
            let server_switch_rack_id = document.createElement('input');
            server_switch_rack_id.setAttribute('type', 'text');
            server_switch_rack_id.setAttribute('name', "device_rack_location[]");
            server_switch_rack_id.setAttribute('id', 'server_switch_rack_id');
            server_switch_rack_id.setAttribute('class', 'server_switch_rack_location');
            server_switch_rack_id.setAttribute('class', 'form-control');
            server_switch_rack_id.setAttribute('style', 'width:300px');
            input_base.appendChild(server_switch_rack_id);
            linebreak = document.createElement("br");
            linebreak.setAttribute('class', 'server_switch_rack_location')
            linebreak.setAttribute('id', 'server_switch_rack_lb_id')
            input_base.appendChild(linebreak);

            let server_switch_room_id_label = document.createElement("label");
            server_switch_room_id_label.setAttribute('id', 'server_switch_room_id_label');
            server_switch_room_id_label.setAttribute('class', 'server_switch_room_location');
            server_switch_room_id_label.setAttribute('name', 'device_room_location[]');
            server_switch_room_id_label.textContent = 'server_switch-'+i+' room location: ';
            input_base.appendChild(server_switch_room_id_label)
            let server_switch_room_id = document.createElement('input');
            server_switch_room_id.setAttribute('type', 'text');
            server_switch_room_id.setAttribute('name', "device_room_location[]");
            server_switch_room_id.setAttribute('id', 'server_switch_room_id');
            server_switch_room_id.setAttribute('class', 'server_switch_room_location');
            server_switch_room_id.setAttribute('class', 'form-control');
            server_switch_room_id.setAttribute('style', 'width:300px');
            input_base.appendChild(server_switch_room_id);
            linebreak = document.createElement("br");
            linebreak.setAttribute('class', 'server_switch_room_location');
            linebreak.setAttribute('id', 'server_switch_room_lb_id');
            input_base.appendChild(linebreak);
        };
    };
};











//let survey_options = document.getElementById('survey_options')
//let add_more_fields = document.getElementById('add_more_fields')
//let remove_fields = document.getElementById('remove_fields')
//
//
//add_more_fields.onclick = function(){
//    let newfield = document.createElement('input');
//    newfield.setAttribute('type','text');
//    newfield.setAttribute('name','survey_options[]');
//    newfield.setAttribute('class','survey_options');
//    newfield.setAttribute('placeholder','Another Field');
//    survey_options.appendChild(newfield);
//}
//
//remove_fields.onclick = function(){
//    let input_tags = survey_options.getElementsByTagName('input');
//    if(input_tags.length > 2){
//        survey_options.removeChild(input_tags[(input_tags.length)-1]);
//    }
//}
