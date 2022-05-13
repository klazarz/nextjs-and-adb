function stripEmps(emp) {
    return (
        {employee_id: emp.employee_id,
        last_name: emp.last_name,
        first_name: emp.first_name}
    );
}

export async function getEmps(offset = 0) {
    const response = await fetch('https://rddainsuh6u1okc-adb.adb.us-ashburn-1.oraclecloudapps.com/ords/hr/emps/?offset=0');
    const emps = await response.json();
    return emps.items.map(stripEmps)
}
