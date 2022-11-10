package com.project.med.serviceinterface;

import java.util.List;

import com.project.med.Entity.Patient;

public interface patientinterface {

	//save new Patient
		public Patient savePatient(Patient patient);
		
		//update Patient
		public Patient updatePatient(Patient Patient);
		
		//fetch all Patient from data base
		public List<Patient> findallPatient();
		
		//delete Patient 
		public void deletPatient(Long id);
	
}
