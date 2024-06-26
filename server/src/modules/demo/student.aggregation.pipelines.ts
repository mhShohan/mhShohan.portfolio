const mergeCollection = () => {
  return [
    {
      $lookup: {
        from: 'faculties',
        localField: 'facultyId',
        foreignField: '_id',
        as: 'faculty',
      },
    },
    { $unwind: '$faculty' },
    {
      $lookup: {
        from: 'departments',
        localField: 'departmentId',
        foreignField: '_id',
        as: 'department',
      },
    },
    { $unwind: '$department' },
    { $unwind: '$faculty' },
    {
      $lookup: {
        from: 'halls',
        localField: 'hallId',
        foreignField: '_id',
        as: 'hall',
      },
    },
    { $unwind: '$hall' },
    {
      $project: {
        studentId: 1,
        name: 1,
        email: 1,
        password: 1,
        dateOfBirth: 1,
        fatherName: 1,
        motherName: 1,
        avatar: 1,
        session: 1,
        phone: 1,
        educationalQualifications: 1,
        presentAddress: 1,
        permanentAddress: 1,
        nationality: 1,
        religion: 1,
        status: 1,
        isVerified: 1,
        hallId: 1,
        hall: '$hall.name',
        facultyId: 1,
        faculty: '$faculty.name',
        departmentId: 1,
        department: '$department.name',
        departmentShortName: '$department.shortName',
      },
    },
  ];
};

const studentAggregationPipelines = { mergeCollection };

export default studentAggregationPipelines;
