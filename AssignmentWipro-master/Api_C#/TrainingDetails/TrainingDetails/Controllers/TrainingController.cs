using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TrainingDetails;
using DataAccess;
using System.Web.Http.Cors;

namespace TrainingDetails.Controllers
{
    public class TrainingController : ApiController
    {
        /// <summary>
        /// Get Api for all records
        /// </summary>
        /// <returns></returns>
        public IEnumerable<DataAccess.TrainingDetail> Get()
        {
            List<TrainingDetail> obj = null;
            using (AdventureWorks2014Entities2 entities = new AdventureWorks2014Entities2())
            {
                if(entities!=null)
                {  obj = entities.TrainingDetails.ToList();
                   
                }
                return obj;
            }
        }

        /// <summary>
        /// Get Api by Id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public HttpResponseMessage Get(int id)
        {
            using (AdventureWorks2014Entities2 entities = new AdventureWorks2014Entities2())
            {
                var entity = entities.TrainingDetails.FirstOrDefault(e => e.id == id);
                if (entity != null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, entity);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Employee with Id = " + id.ToString() + "NotFound");
                }
            }

        }
        /// <summary>
        /// Post Api
        /// </summary>
        /// <param name="trainingdetails"></param>
        /// <returns></returns>
        
        public HttpResponseMessage Post([FromBody] TrainingDetail trainingdetails)
        {
            try
            {
                HttpResponseMessage message = null;
                using (AdventureWorks2014Entities2 entities = new AdventureWorks2014Entities2())
                {
                    if(entities!=null)
                    {
                        entities.TrainingDetails.Add(trainingdetails);
                        entities.SaveChanges();
                        message = Request.CreateResponse(HttpStatusCode.Created, trainingdetails);
                        message.Headers.Location = new Uri(Request.RequestUri + @"\" + trainingdetails.id.ToString());
                    }
                   
                    return message;
                    
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadGateway, ex);
            }

        }
        /// <summary>
        /// Edit Api
        /// </summary>
        /// <param name="id"></param>
        /// <param name="trainingdetails"></param>
        /// <returns></returns>

        public HttpResponseMessage Put(int id, [FromBody]TrainingDetail trainingdetails)
        {
            try
            {
                using (AdventureWorks2014Entities2 entities = new AdventureWorks2014Entities2())
                {
                    var entity = entities.TrainingDetails.FirstOrDefault(e => e.id == id);
                    if (entity == null)
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Employee with Id = " + id.ToString() + "NotFound to update");

                    }
                    else
                    {
                        entity.Name = trainingdetails.Name;
                        entity.StartDate = trainingdetails.StartDate;
                        entity.EndDate = trainingdetails.EndDate;                       
                        entities.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.OK, entity);
                    }

                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
