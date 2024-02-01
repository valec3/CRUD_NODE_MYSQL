import {
    getDistributionGeographic,
    getIssuesAndSubIssues,
    getMoreComplaintsCompany,
    getReportGeneral,
    getResponseTime,
    getFrequencyComplaints,
} from '../controllers/ConsComplaints.controller.js';
import { Router } from 'express';
const router = Router();

router.get('/', getReportGeneral);
router.get('/issues', getIssuesAndSubIssues);
router.get('/companies', getMoreComplaintsCompany);
router.get('/geographic', getDistributionGeographic);
router.get('/response-time', getResponseTime);
router.get('/frequency', getFrequencyComplaints);

export default router;
