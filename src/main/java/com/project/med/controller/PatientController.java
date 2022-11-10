package com.project.med.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.project.med.Entity.Patient;
import com.project.med.serviceimplement.patientimolement;

@RestController
@CrossOrigin("*")
public class PatientController {

	@Autowired
	private patientimolement pationimp;
	@RequestMapping(value = "/savepatient",method=RequestMethod.POST, consumes="application/json")
	public Patient savepation(@RequestBody Patient patient) {
		System.out.println("patient save works properly!");
		pationimp.savePatient(patient);
		return patient;
		
	}
	@GetMapping(value = "/getallpatient")
    public List<Patient> findAllmedcins(){
		return (List<Patient>) pationimp.findallPatient();
	}
    
	@PutMapping("/updatepatient")
	public Patient updatemedcin(@RequestBody Patient patient) {
		return pationimp.updatePatient(patient);
	}
	@DeleteMapping("/deletepatient")
	public 	String deletepatient(@RequestParam Long id) {
		
		pationimp.deletPatient(id);
		return "patient deleted!";
	}
}
